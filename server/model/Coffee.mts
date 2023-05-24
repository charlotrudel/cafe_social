import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const coffeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
        required: true,
    },
    process: {
        type: String,
        required: true,
    },
    roaster: {
        type: SchemaTypes.ObjectId,
        ref: 'Roaster',
        required: true,
    },
    roasterNotes: {
        type: [String],
        required: true,
    },
    roast: Number,
    funk: Number,
    altitude: Number,
    productionInfo: String
});

const Coffee = model('Coffee', coffeeSchema);
export default Coffee;