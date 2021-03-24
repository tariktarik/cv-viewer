import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import usersRoutes from './routes/users.js';
import resumesRoutes from './routes/resumes.js';

dotenv.config();

mongoose.connect('mongodb+srv://tarik:tarik@ant.ho07e.mongodb.net/ant_viewer?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to db'));

const app = express();
app.use(cors())
const PORT = proccess.env.PORT || 5000;
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use('/users', usersRoutes);
app.use('/resumes', resumesRoutes);




