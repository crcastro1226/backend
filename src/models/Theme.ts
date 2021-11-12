import { Schema, model, Document } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const schema = new Schema({
    name: String,
    description: String,
})

schema.plugin(mongoosePaginate)

interface ITheme extends Document {
    name: string;
    description: string;
}

export default model<ITheme>('Theme', schema)