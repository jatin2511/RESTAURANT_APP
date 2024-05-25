import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {dbconnection} from './database/dbconnection.js'
import { errormiddleware } from './error/error.js'
import reservationrouter from './routes/reservationRoute.js'
const app=express()
dotenv.config({path:'./config/config.env'})
app.use(cors({
    origin:'*',
    methods:['post'],
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/reservation',reservationrouter);
dbconnection();
app.use(errormiddleware)
export default app;