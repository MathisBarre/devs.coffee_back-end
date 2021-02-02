import { Schema, model, Model, Document } from 'mongoose'

export interface IdiscordServer extends Document {
  name: string
  details: string
  link: string
  imgUrl: string
  learningPaths?: string[]
  learningPathsDetails: string
  apiUrl?: string
}

const discordServerSchema: Schema = new Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  link: { type: String, required: true },
  imgUrl: { type: String, required: true },
  learningPaths: [{ type: Array, required: false }],
  learningPathsDetails: { type: String, required: true },
  apiUrl: { type: String, required: false }
})

const DiscordServer: Model<IdiscordServer> = model('DiscordServer', discordServerSchema)

export default DiscordServer
