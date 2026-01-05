import mongoose from "mongoose";
const connectdb= async ()=>{
  try{
    mongoose.connection.on('connected',()=>{
      console.log("db connected successfully");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/socialmedia`)
}
  catch(err){
    console.log("error in db connection",err);
  }
}
export default connectdb;