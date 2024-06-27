import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connection = () => {
  const URL_DB = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASS}.5t8kyh0.mongodb.net/?retryWrites=true&w=majority&appName=gmailclone`;



  try {
    mongoose.connect(URL_DB)
    console.log("database connected succesfully");


  } catch (error) {
    console.log("this error is", error);
  }
};

export default connection;
