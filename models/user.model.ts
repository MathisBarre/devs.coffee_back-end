import { Schema, Model, Document, model } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export interface Iuser extends Document {
  email: string
  password: string
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

userSchema.plugin(uniqueValidator)

const User: Model<Iuser> = model('User', userSchema)

export default User
