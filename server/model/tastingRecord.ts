import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const tastingRecordSchema = new Schema({
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
    aromaQuantity: {
        type: Number,
        required: true
    },
    aromaQuality: {
        type: Number,
        required: true
    },
    aromaNotes: String,
    acidityQuantity: {
        type: Number,
        required: true
    },
    acidityQuality: {
        type: Number,
        required: true
    },
    acidityNotes: String,
    sweetnessQuantity: {
        type: Number,
        required: true
    },
    sweetnessQuality: {
        type: Number,
        required: true
    },
    sweetnessNotes: String,
    bodyQuantity: {
        type: Number,
        required: true
    },
    bodyQuality: {
        type: Number,
        required: true
    },
    bodyNotes: String,
    finishQuantity: {
        type: Number,
        required: true
    },
    finishQuality: {
        type: Number,
        required: true
    },
    finishNotes: String,
    flavourNotes: String,
    overallScore: {
        type: Number,
        required: true
    },
    method: String, //[Icon] for espresso, filter, aeropress...
    equipment: String, //Req list of equipment from User and chose from it
    grinder: String, //Req list of grinders from User and chose from it
    recipe: {
        gramIn: Number,
        gramOut: Number,
        recipeNote: String
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immmutable: true
    },
    updatedAt: Date
});

const tastingRecord = model('tastingRecord', tastingRecordSchema);
export default tastingRecord;