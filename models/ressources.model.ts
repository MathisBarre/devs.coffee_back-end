import { Schema, model, Model, Document } from 'mongoose'

export interface Iressource extends Document {
  name: string
  details: string
  imgUrl: string
  link: string
  tags: string[]
}

const ressourceSchema: Schema = new Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  imgUrl: { type: String, required: true },
  link: { type: String, required: true },
  tags: [{ type: String, required: true }]
})

const Ressource: Model<Iressource> = model('Ressource', ressourceSchema)

export default Ressource
