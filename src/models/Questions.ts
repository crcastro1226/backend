import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    question: String,
    category: String,
    options: [{
        type: Schema.Types.ObjectId,
        ref: 'Options',
    }]
})

interface IQuestion extends Document {
    question: string;
    category: string;
    options: any;
}

export default model<IQuestion>('Questions', schema)