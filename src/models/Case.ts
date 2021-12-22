import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    theme_id: String,
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Questions',
    }],
    uuid: String
})

interface ICase extends Document {
    theme_id: string;
    questions: any;
    uuid: string;
}

export default model<ICase>('Case', schema)