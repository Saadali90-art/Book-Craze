import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("DataBase Connected");
  } catch (error) {
    console.log("Error Connection To DB Failed", error.message);
  }
};

export default connectDB;
