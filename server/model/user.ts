import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLenght: 3
    },
    email: {
        type: String,
        minLenght: 7,
        required: true,
        lowercase: true
    },
    process: {
        type: String,
        required: true,
    },
    role: String,
    Karma: Number,
    equipment: [String],
    grinder: [String],
});

const User = model('User', userSchema);
export default User;