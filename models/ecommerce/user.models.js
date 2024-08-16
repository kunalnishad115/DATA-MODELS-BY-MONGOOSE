import { Timestamp } from 'bson';
import mongoose from 'mongoose'
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    passsord: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
  },
  { Timestamp: true }
);
export const User = mongoose.model('User', userSchema);
