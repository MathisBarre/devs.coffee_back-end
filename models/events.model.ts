import { Schema, model, Model, Document } from 'mongoose'

export interface Ievent extends Document {
  type: string
  name: string
  date: string
  link: string
}

const eventSchema: Schema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  link: { type: String, required: true }
})

const Event: Model<Ievent> = model('Event', eventSchema)

export default Event
