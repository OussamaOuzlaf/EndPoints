import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import studentRouter from './routers/students';

const app = express()
const port = 5000;
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))

mongoose.connect("mongodb://localhost:27017/LearnMern").
    then(() => console.log("connected!"))
    
app.use('/student', studentRouter)

app.listen(port, () => {
    console.log("Now you Connected in Port " + port);
})