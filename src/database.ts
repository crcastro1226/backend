import { connect } from 'mongoose'

export const startConnection = async () => {
    await connect(`mongodb://localhost/${process.env.DATABASE}`);
    console.log('Database is connected');
}