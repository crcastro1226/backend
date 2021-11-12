import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    username: String,
    password: String,
    email: String,
    role: String,
})

interface IAdmin extends Document {
    username: string;
    password: string;
    email: string;
    role: string;
}

export default model<IAdmin>('Admin', schema)