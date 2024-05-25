import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {dbconnection} from './database/dbconnection.js'
import { errormiddleware } from './error/error.js'
import reservationrouter from './routes/reservationRoute.js'
const app=express()
dotenv.config({path:'./config/config.env'})
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['post'],
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/reservation',reservationrouter);
dbconnection();
app.use(errormiddleware)
export default app;