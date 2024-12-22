const request = require('supertest');
const app = require("../app");
const mongoose = require("mongoose");
const AuthUser = require('../models/auth-user.model');

describe("Auth related Test Suite", () => {

    describe("/register API Test Suite", () => {
        let endpoint = "/api/v1/auth/register";
        let payload = {
            username: 'test1234',
            password: 'pass',
            confirmPassword: 'pass'
        }

        let connection;

        beforeAll(async () => {
            connection = await mongoose.connect(globalThis.__MONGO_URI__ + globalThis.__MONGO_DB_NAME__)
        });

        afterAll(async () => {
            await connection.disconnect();
        });

        beforeEach(async () => {
            await AuthUser.deleteMany({})
        })

        test("should return error with insufficient body fields", async () => {
            const res = await request(app)
                                .post(endpoint)
                                .send(payload)
                                .set('Content-Type', 'application/json');
            
            expect(res.statusCode).toBe(400);
            expect(res.body.errors).toHaveLength(5)
        });

        test("should return 201 status when body is valid", async () => {
            payload = {
                username: 'test1234',
                email: 'test@mail.com',
                firstName: "testFirst",
                lastName: "testLast",
                password: 'test12345.',
                confirmPassword: 'test12345.'
            }
            const res = await request(app)
                                .post(endpoint)
                                .send(payload)
                                .set('Content-Type', 'application/json');
            expect(res.statusCode).toBe(201);
            const authUser = await AuthUser.findById(res.body._id);
            expect(authUser).toBeDefined()
            expect(authUser.username).toBe('test1234');
            expect(authUser.firstName).toBe('testFirst');
            expect(authUser.lastName).toBe('testLast')
            
        })
    });
})