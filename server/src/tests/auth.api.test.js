const request = require('supertest');
const app = require("../app");

describe("Auth related Test Suite", () => {

    describe("/register API Test Suite", () => {
        let endpoint = "/api/v1/auth/register";
        let payload = {
            username: 'test1234',
            password: 'pass',
            confirmPassword: 'pass'
        }
        test("should return error with insufficient body fields", async () => {
            const res = await request(app)
                                .post(endpoint)
                                .send(payload)
                                .set('Content-Type', 'application/json');
            // console.log(res.body)
            expect(res.statusCode).toBe(400);
            expect(res.body.errors).toHaveLength(3)
        });

        test("should return 201 status when body is valid", async () => {
            payload = {
                username: 'test1234',
                email: 'test@mail.com',
                password: 'test12345.',
                confirmPassword: 'test12345.'
            }
            const res = await request(app)
                                .post(endpoint)
                                .send(payload)
                                .set('Content-Type', 'application/json')
            expect(res.statusCode).toBe(201)
        })
    });
})