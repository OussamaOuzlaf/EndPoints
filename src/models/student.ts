import mongoose, { Schema, Document } from "mongoose";

interface IStudent extends Document {
    fullName: string
    email: string
    age: string
}

const schema: Schema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String },
    age: { type: String }
})


export const studentModel = mongoose.model<IStudent>("student", schema)