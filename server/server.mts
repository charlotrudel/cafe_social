import express from 'express';
import cors from 'cors';
import './loadEnvironment.mjs';
import records from './routes/record.mjs';
import auth from './routes/auth.mjs';
import roasters from './routes/roaster.mjs'

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/record', records);
app.use('/auth', auth);
app.use('/roaster', roasters);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
