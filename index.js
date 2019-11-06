const express = require("express");
const server = express();
const db = require("./data/db");

server.get("/api/cars", (req, res) => {
    db.select("*")
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({message: "could not retrieve database information"}));
});

/**
 * 
 * - The critical information for each car is the VIN, make, model, and mileage.
- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

 */

server.post("/api/cars", (req, res) => {
    if(req.body.vin && req.body.make && req.body.model && req.body.milage)
        db("cars").insert(req.body)
        .then(() => res.sendStatus(200))
        .catch(() => res.status(500).json({message: "could not add row to database"}));
    else
        res.status(400).json({message: "required propeties: vin, make, model, milage"});
});