import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './cofig/db.js';
import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profile.js';
import sessionMiddleware from './middlewares/session.js';

const PORT = 8080;
const app = express();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(sessionMiddleware);
app.get('/ping', (req,res)=> {
    res.send('Welcome to the server');
})

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})