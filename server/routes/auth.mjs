import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';
import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const HASH_ITERATIONS = 10;

const router = express.Router();

// This route registers a new user with a username, email adress and hashed password
router.post('/register', async (req, res) => {
    const user = req.body;

    const takenUsername = await db.collection('users').findOne({ username: user.username });
    const takenEmail = await db.collection('users').findOne({ email: user.email });

    if (takenUsername) {
        res.json({ message: 'Username has already been taken' });
    } else if (takenEmail) {
        res.json({ message: 'Email has already been taken' });
    } else {
        user.password = await bcrypt.hash(req.body.password, HASH_ITERATIONS);

        const newUser = {
            username: user.username,
            email: user.email,
            password: user.password,
        };
        const collection = db.collection('users');
        const result = await collection.insertOne(newUser);
        res.send(result).status(204);
    }
});

// This route logs in a user by generating a jwt
router.post('/login', (req, res) => {
    const userLoggingIn = req.body;

    db.collection('users')
        .findOne({ username: userLoggingIn.username })
        .then((dbUser) => {
            if (!dbUser) {
                return res.json({ message: 'Invalid username or password' });
            }
            bcrypt.compare(userLoggingIn.password, dbUser.password).then((isCorrect) => {
                if (isCorrect) {
                    const payload = {
                        id: dbUser._id,
                        username: dbUser.username,
                    };
                    jsonwebtoken.sign(
                        payload,
                        process.env.JWT_SECRET,
                        { expiresIn: process.env.JWT_EXPIRES_IN },
                        (err, token) => {
                            if (err) return res.json({ message: 'err' });
                            return res.json({
                                message: 'Sucess',
                                token: 'Bearer ' + token,
                            });
                        },
                    );
                } else {
                    return res.json({
                        message: 'Invalid username or password',
                    });
                }
            });
        });
});

// This function is called by the /getUsername route and validates the status of the JWT
function verifyJWT(req, res, callback) {
    const token = re.headers['x-access-token']?.split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET),
            (err, decoded) => {
                if (err)
                    return res.json({
                        isLoggedIn: false,
                        message: 'Failed to authenticate',
                    });
                req.user = {};
                req.user.id = decoded.id;
                req.user.username = decoded.username;
                callback();
            };
    } else {
        res.json({ message: 'Incorrect token', isLoggedIn: false });
    }
}

// This route validates the login status and returns user info
router.get('/getUser', verifyJWT, (req, res) => {
    res.json({ isLoggedIn: true, username: req.user.username });
});

export default router;
