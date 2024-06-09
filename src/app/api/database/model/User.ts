import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
});

export default mongoose.models.User || model("User", userSchema);
