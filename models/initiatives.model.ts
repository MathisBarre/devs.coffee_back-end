import { Schema, model, Model, Document } from 'mongoose'

export interface Iinitiative extends Document {
  name: string
  details: string
  imgUrl: string
  link: string
}

const initiativeSchema: Schema = new Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  imgUrl: { type: String, required: true },
  link: { type: String, required: true }
})

const Initiative: Model<Iinitiative> = model('Initiative', initiativeSchema)

export default Initiative
