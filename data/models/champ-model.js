const db = require("../db-config");

async function findChampionById(id) {
  const champion = await db("champions").where({ id }).first();
  return champion;
}

async function add(champion) {
  const newChampionId = await db("champions").insert(champion);
  const returnedChampion = await findChampionById(newChampionId);
  return returnedChampion;
}

async function removeChampionById(id) {
  const numOfDeleted = await db("champions").where({ id }).del();
  const champion = await findChampionById(id);
  return champion;
}

module.exports = {
  findChampionById,
  add,
  removeChampionById,
};
