import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';
const app=express();
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
  res.send('hello world')
})
const port=process.env.PORT || 5000;
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})