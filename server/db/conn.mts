import mongoose from "mongoose";

const connectionString = `${process.env.ATLAS_URI}/cafe_social?retryWrites=true&w=majority` || "";

let db = mongoose.connection;

mongoose.connect(connectionString);

export default db;
