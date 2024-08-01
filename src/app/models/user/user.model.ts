import { user } from '@/app/types/user';
import mongoose, { Schema } from 'mongoose';

const schema = new Schema<user>({
  address: { required: true, type: String },
  age: { required: true, type: Number },
  name: { required: true, type: String },
  phone: { required: true, type: Number },
});

export const userModel = mongoose.model('user', schema);
