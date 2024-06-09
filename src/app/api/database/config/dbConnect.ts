import mongoose from "mongoose";

export default async function () {
  try {
    const connect = await mongoose.connect("mongodb://localhost:27017/nextDb");
    if (connect) {
      console.log("Database connected");
    } else {
      console.log("Database not connected");
    }
  } catch (error) {
    console.log(error, "Db connect error");
  }
}
