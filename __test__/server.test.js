const server = require("../api/server");
const request = require("supertest");
const db = require("../data/db-config");
const Champions = require("../data/models/champ-model");

beforeEach(async () => {
  await db("champions").truncate();
});

describe("Test Environment Variable", () => {
  it("Tests the process env to ensure the correct value", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("Insert Champions into DB", () => {
  it("Inserts 2 champions into database", async () => {
    await db("champions").insert({ name: "Lucian", age: 42 });
    await db("champions").insert({ name: "Senna", age: 40 });

    const champions = await db("champions");
    expect(champions).toHaveLength(2);
  });
});

describe("Delete Champion from database", () => {
  it("Deletes champion from database", async () => {
    await db("champions").insert({ name: "Lucian", age: 42 });
    await db("champions").insert({ name: "Senna", age: 40 });

    await db("champions").where({ id: 2 }).del();

    const champions = await db("champions");

    expect(champions).toHaveLength(1);
  });
});

describe("Run server with no errors", () => {
  it("Receives an Status 200(OK) from the server", async () => {
    const expectedStatusCode = 200;
    const response = await request(server).post("/api/champions/create");
    expect(response.status).toEqual(expectedStatusCode);
  });
});
