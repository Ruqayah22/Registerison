import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String , required:true, minLength: 6},
  },
  {
    timestamps: true,
  }
);

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "User");

const UserDB = mongoose.model("User", userSchema);

export default UserDB;
