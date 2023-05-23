import mongoose from "mongoose";
const { Schema, model } = mongoose;

const roasterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    url: String
});

const Roaster = model('Roaster', roasterSchema);
export default Roaster;