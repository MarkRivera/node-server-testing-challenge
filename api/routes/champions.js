const express = require("express");
const router = express.Router();
const Champions = require("../../data/models/champ-model");

router.post("/create", (req, res) => {
  try {
    const newChampion = Champions.add(req.body);
    res.status(200).json(newChampion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "An error has occurred in the server!" });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const champ = await Champions.findChampionById(req.body.id);
    const deletedNum = await Champions.removeChampionById(req.body.id);
    res.status(200).json({ msg: "Deleted", champ });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
