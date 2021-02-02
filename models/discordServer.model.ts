import { Schema, model, Model, Document } from 'mongoose'

export interface IdiscordServer extends Document {
  name: string;
  description: string;
  href: string;
  img: string;
  learningPaths?: Array<string>;
  apiUrl?: string;
}

const discordServerSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  href: { type: String, required: true },
  img: { type: String, required: true },
  learningPaths: [{ type: Array, required: false }],
  apiUrl: { type: String, required: false }
})

const DiscordServer: Model<IdiscordServer> = model('Discord', discordServerSchema)

export default DiscordServer
