const request = require('supertest');
const app = require('../app');

describe("NotFound Error Test suite", () => {
    test.each([
        {method: 'get'}, 
        {method: 'post'}, 
        {method: 'put'}, 
        {method: 'delete'}
    ])('should return 404 when $method of unregistered route is called', async ({method}) => {
        const res = await request(app)[method]('/api/some-unwanted-request');

        expect(res.statusCode).toBe(404);
        expect(res.body.errors).toHaveLength(1);
        expect(res.body.errors[0].message).toMatch(/not found on server/i)
    })
})