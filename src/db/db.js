import mongoose from "mongoose";
import {DbName} from "../constants.js";
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_URL}/${DbName}`
    );
    console.log(`Connected to database: ${connection.connection.name}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB