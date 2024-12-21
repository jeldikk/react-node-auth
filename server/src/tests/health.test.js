const request = require('supertest');
const app = require("../app");

describe("health API TestSuite", () => {
    test("GET /api/health", async () => {
        const res = await request(app).get("/api/health");
        expect(res.statusCode).toBe(200)
    });

})