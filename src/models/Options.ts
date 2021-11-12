import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    question_id: String,
    option: String,
    response: Boolean,
    position: Number
})

interface IOption extends Document {
    question_id: string;
    option: string;
    response: boolean;
    position: number;
}

export default model<IOption>('Options', schema)