import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const brewNoteSchema = new Schema({
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    coffee: {
        type: SchemaTypes.ObjectId,
        ref: 'Coffee',
        required: true
    },
    equipment: String, //Req list of equipment from User and chose from it
    grinder: String, //Req list of grinders from User and chose from it
    gramIn: Number,
    gramOut: Number,
    grind: String,
    recipeNote: String,
    tastingNotes: String,
    temperature: Number,
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immmutable: true
    },
    updatedAt: Date
});

const brewNote = model('brewNote', brewNoteSchema);
export default brewNote;