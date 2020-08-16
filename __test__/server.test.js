const server = require("../api/server");
const supertest = require("supertest");
const { request } = require("../api/server");

describe("Test Environment Variable", () => {
  it("Tests the process env to ensure the correct value", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("Run server with no errors", () => {
  it("Receives an Status 200(OK) from the server", () => {
    // expect(request())
  });
});
