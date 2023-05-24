import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import Roaster from "../model/Roaster.mjs";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = db.collection("roasters");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = db.collection("roasters");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  const roaster = await Roaster.create({
    name: req.body.name,
    address: req.body.address,
    url: req.body.url
  })
  res.send(roaster).status(200);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  const roaster = await Roaster.findByIdAndUpdate(req.params.id, req.body, function(err:Error, roaster:typeof Roaster) {
    res.send(roaster);
  });
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("records");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
