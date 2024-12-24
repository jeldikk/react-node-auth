const request = require('supertest');
const app = require("../app");
const mongoose = require('mongoose');

jest.mock("../config", () => ({
    JWT_SECRET: 'some-test-jwt-secret'
}))

describe.only("Migration Data API Test Suite", () => {
    
    let connection;
    let sessionCookie;
    const registerPayload = {
        username: 'testUsername',
        firstName: 'testFirstName',
        lastName: 'testLastName',
        email: "test@mail.com",
        password: "test-password",
        confirmPassword: "test-password"
    }

    beforeAll(async () => {
        connection = await mongoose.connect(globalThis.__MONGO_URI__ + globalThis.__MONGO_DB_NAME__)
    });

    afterAll(async () => {
        await connection.disconnect();
    });

    beforeEach(async () => {
        const registerEndpoint = "/api/v1/auth/register";
        const loginEndpoint = "/api/v1/auth/login";
        await request(app)
                .post(registerEndpoint)
                .send(registerPayload)
                .set("Content-Type", "application/json")
        const loginRes = await request(app)
                                .post(loginEndpoint)
                                .send({
                                    username: registerPayload.username,
                                    password: registerPayload.password
                                })
                                .set("Content-Type", "application/json");
        sessionCookie = loginRes.headers['set-cookie'][0].split(';')[0];
    })

    test("GET /migrations should return list of migrations", async () => {
        const migrationsEndpoint = "/api/v1/migrations"
        const migrationsRes = await request(app)
                                        .get(migrationsEndpoint)
                                        .set('Cookie', sessionCookie)
        expect(migrationsRes.status).toBe(200);
        // console.log(migrationsRes.body)
        expect(migrationsRes.body).toHaveLength(10)
    })
    
})