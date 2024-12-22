const request = require('supertest');
const app = require("../app");
const mongoose = require("mongoose");
const AuthUser = require('../models/auth-user.model');

describe("Auth related Test Suite", () => {

    describe("/register API Test Suite", () => {
        let endpoint = "/api/v1/auth/register";
        let payload = {
            username: 'test1234',
            firstName: "testFirstName",
            lastName: "testLastName",
            password: 'password123',
            confirmPassword: 'password123'
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
            expect(res.body.errors).toHaveLength(1)
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
            // console.log(res.body)
            expect(res.statusCode).toBe(201);
            const authUser = await AuthUser.findById(res.body._id);
            expect(authUser).toBeDefined()
            expect(authUser.username).toBe('test1234');
            expect(authUser.firstName).toBe('testFirst');
            expect(authUser.lastName).toBe('testLast')
            
        });

        test("should have unique username values", async () => {
            // set missing email
            payload.email = "test@mail.com";

            let res = await request(app)
                                .post(endpoint)
                                .send(payload)
                                .set("Content-Type", "application/json");
            expect(res.status).toBe(201);

            payload.email = "test1@mail.com";
            res = await request(app)
                        .post(endpoint)
                        .send(payload)
                        .set('Content-Type', 'application/json');
            // console.log(res.body)
            expect(res.status).toBe(400);
            expect(res.body.errors[0].message).toMatch(/duplicate key error/i);
            expect(res.body.errors[0].message).toMatch(/index: username_1 dup key/i)
        });

        test('should have unique email value', async () => {
            
            payload.email = "test@mail.com";

            let res = await request(app)
                                .post(endpoint)
                                .send(payload)
                                .set("Content-Type", "application/json");
            expect(res.status).toBe(201);

            payload.username = "test_username";
            res = await request(app)
                        .post(endpoint)
                        .send(payload)
                        .set('Content-Type', 'application/json');
            // console.log(res.body)
            expect(res.status).toBe(400);
            expect(res.body.errors[0].message).toMatch(/duplicate key error/i)
            expect(res.body.errors[0].message).toMatch(/index: email_1 dup key/i)

        })
    });

    describe("/login API Test Suite", () => {
        let registerEndpoint = "/api/v1/auth/register";
        let loginEndpoint = "/api/v1/auth/login"
        let payload = {
            username: 'test1234',
            firstName: "testFirstName",
            lastName: "testLastName",
            email: 'test@mail.com',
            password: 'password123',
            confirmPassword: 'password123'
        }

        let connection;

        beforeAll(async () => {
            connection = await mongoose.connect(globalThis.__MONGO_URI__ + globalThis.__MONGO_DB_NAME__)
        });

        afterAll(async () => {
            await connection.disconnect();
        });

        beforeEach(async () => {
            await AuthUser.deleteMany({});
            await request(app)
                    .post(registerEndpoint)
                    .send(payload)
                    .set('Content-Type', 'application/json');
        })

        test("should give error response when invalid login details are provided", async () => {
            const res = await request(app)
                                .post(loginEndpoint)
                                .send({
                                    password: 'password123'
                                })
                                .set('Content-Type', 'application/json')
            // console.log(res.body);
            expect(res.status).toBe(400)
            expect(res.body.errors).toHaveLength(1)
            
        })

        test.only("POST /login request", async () => {
            const res = await request(app)
                                .post(loginEndpoint)
                                .send({
                                    username: 'test1234',
                                    password: "password123"
                                })
                                .set("Content-Type", 'application/json')
            
        })

    })
})