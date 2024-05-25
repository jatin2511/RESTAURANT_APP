import mongoose from "mongoose";
export const dbconnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:'RESTAURANT_APP',
    }).then(()=>{
        console.log('connected to database successfully')
    }).catch((err)=>{
        console.log(`error ${err}occured while connecting to database`)
    })
}