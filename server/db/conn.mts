import { Db, MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn: MongoClient = await client.connect();
let db: Db = conn.db("cafe_social");

export default db;
