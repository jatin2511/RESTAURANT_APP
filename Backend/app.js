import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbconnection } from './database/dbconnection.js';
import { errormiddleware } from './error/error.js';
import reservationrouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: './config/config.env' });

const corsOptions = {
    origin:"https://restaurant-app-theta-nine.vercel.app/",
    methods: ['GET', 'POST'],
    credentials: true
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('hello guys')
})
app.use('/reservation', reservationrouter);


dbconnection();


app.use(errormiddleware);

export default app;