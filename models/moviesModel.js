import mongoose from 'mongoose';

const moviesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    picture: String,
},{versionKey: false})

export const moviesModel = mongoose.model('post', moviesSchema);