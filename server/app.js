import express from 'express';
import connectDb from './db/config.js';
import dotenv from "dotenv";

dotenv.config();
connectDb()


const app = express();


app.get('/health',(req,res)=>{
    res.send('Health is ok')
})



app.listen(3000 ,()=>{

    console.log("server is running")

})