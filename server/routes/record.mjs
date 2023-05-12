import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newRecord = {
    userName: req.body.userName,
    coffeeName: req.body.coffeeName,
    roaster: req.body.roaster,
    roast: req.body.roast,
    aromaQuantity: req.body.aromaQuantity,
    aromaQuality: req.body.aromaQuality,
    aromaNotes: req.body.aromaNotes,
    acidityQuantity: req.body.acidityQuantity,
    acidityQuality: req.body.acidityQuality,
    acidityNotes: req.body.acidityNotes,
    sweetnessQuantity: req.body.sweetnessQuantity,
    sweetnessQuality: req.body.sweetnessQuality,
    sweetnessNotes: req.body.sweetnessNotes,
    bodyQuantity: req.body.bodyQuantity,
    bodyQuality: req.body.bodyQuality,
    bodyNotes: req.body.bodyNotes,
    finishQuantity: req.body.finishQuantity,
    finishQuality: req.body.finishQuality,
    finishNotes: req.body.finishNotes,
    flavourNotes: req.body.flavourNotes,
    overallScore: req.body.overallScore
  };
  let collection = await db.collection("records");
  let result = await collection.insertOne(newRecord);
  res.send(result).status(204);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates =  {
    $set: {
      userName: req.body.userName,
      coffeeName: req.body.coffeeName,
      roaster: req.body.roaster,
      roast: req.body.roast,
      aromaQuantity: req.body.aromaQuantity,
      aromaQuality: req.body.aromaQuality,
      aromaNotes: req.body.aromaNotes,
      acidityQuantity: req.body.acidityQuantity,
      acidityQuality: req.body.acidityQuality,
      acidityNotes: req.body.acidityNotes,
      sweetnessQuantity: req.body.sweetnessQuantity,
      sweetnessQuality: req.body.sweetnessQuality,
      sweetnessNotes: req.body.sweetnessNotes,
      bodyQuantity: req.body.bodyQuantity,
      bodyQuality: req.body.bodyQuality,
      bodyNotes: req.body.bodyNotes,
      finishQuantity: req.body.finishQuantity,
      finishQuality: req.body.finishQuality,
      finishNotes: req.body.finishNotes,
      flavourNotes: req.body.flavourNotes,
      overallScore: req.body.overallScore
    }
  };

  let collection = await db.collection("records");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("records");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;