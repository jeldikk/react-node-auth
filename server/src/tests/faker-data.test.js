const {generateMockMigrations} = require("../mock-data/migrations.mock")

describe("Testing data generated by faker module", () => {
    test("generateMockMigrations testcase", () => {
        let migrations = generateMockMigrations();
        expect(migrations).toHaveLength(10);

        migrations = generateMockMigrations(5);
        // console.log(migrations);
    })
})