import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    theme_id: String,
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Questions',
    }],
    name: String,
    response: String
})

interface ICase extends Document {
    theme_id: string;
    description: string;
    questions: any;
    name: string;
    response: string;
}

export default model<ICase>('Case', schema)