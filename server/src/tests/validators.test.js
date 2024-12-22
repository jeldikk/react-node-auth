const {registerPayloadSchema} = require("../validators/auth.schemas");
const {validatePayloadSchema} = require("../validators")

describe("registerPayload Validation TestSuite", () => {
    
    test("username field validations", () => {
        let actual;
        const payload = {
            email: 'abc@mail.com',
            password: 'abcd12345',
            confirmPassword: "abcd12345"
        };

        actual = validatePayloadSchema(registerPayloadSchema, payload);
        // console.log(JSON.stringify(actual, null, 2))
        expect(actual.success).toBe(false);
        expect(actual.error.issues).toHaveLength(1);
        expect(actual.error.issues[0].message).toBe('Required');

        payload.username = 'abc';

        actual = validatePayloadSchema(registerPayloadSchema, payload);
        expect(actual.success).not.toBe(true);

        payload.username = 'test1234';
        actual = validatePayloadSchema(registerPayloadSchema, payload)
        console.log(JSON.stringify(actual))
        expect(actual.success).toBe(true)
    });

    test("email field validations", () => {
        let payload = {
            username: 'test1234',
            password: 'password1234',
            confirmPassword: 'password1234'
        };

        let actual = validatePayloadSchema(registerPayloadSchema, payload);
        expect(actual.success).toBe(false);

        payload.email = "test";
        actual = validatePayloadSchema(registerPayloadSchema, payload);
        expect(actual.success).toBe(false);

        payload.email = 'test@mail.com';
        actual = validatePayloadSchema(registerPayloadSchema, payload);
        expect(actual.success).toBe(true)
    });

    test("password field validations", () => {
        let payload = {
            username: 'test1234',
            email: 'test@mail.com',
            confirmPassword: 'test12345'
        };

        let actual = validatePayloadSchema(registerPayloadSchema, payload);
        expect(actual.success).toBe(false);

        payload.password = "test";
        actual = validatePayloadSchema(registerPayloadSchema, payload);
        expect(actual.success).toBe(false);

        payload.password = "test12345";
        actual = validatePayloadSchema(registerPayloadSchema, payload);
        expect(actual.success).toBe(true)
    });

    test("confirmPassword field validations", () => {
        let payload = {
            username: 'test1234',
            email: 'test@mail.com',
            password: 'test12345'
        };

        let actual = validatePayloadSchema(registerPayloadSchema, payload);
        expect(actual.success).toBe(false);

        payload.confirmPassword = "test";
        actual = validatePayloadSchema(registerPayloadSchema, payload);
        expect(actual.success).toBe(false);

        payload.confirmPassword = "test12345";
        actual = validatePayloadSchema(registerPayloadSchema, payload);
        expect(actual.success).toBe(true)
    });

});

describe.only("Some More tests For Experimentation", () => {
    test('ValidationError toJSON returning errors', () => {
        const payload = {
            username: 'abc',
            email: 'test',
            confirmPassword: 'test'
        };

        const actual = validatePayloadSchema(registerPayloadSchema, payload);
        console.log(JSON.stringify(actual, null, 2))
    })
})