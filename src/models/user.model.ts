import { Schema, model } from 'mongoose'
import IUser from '../interfaces/user.interface'

const UserSchema = new Schema<IUser>({
  name: { type: String, required: [true, 'Name is required'] },
  age: { type: Number, required: [true, 'Age is required'] },
  email: { type: String, required: [true, 'Email is required'] },
  photo: { type: String },
  contactNo: { type: String, required: [true, 'Contact No is required'] },
  role: { type: String, enum: ['user', 'admin'] },
  userStatus: { type: String, enum: ['active', 'inactive'] },
})

const UserModel = model<IUser>('Users', UserSchema)

export default UserModel
