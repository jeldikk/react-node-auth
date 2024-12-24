const {faker} = require("@faker-js/faker");

function generateMockMigrations(count = 10){
    const migrationsArr = [];
    for(let i=0;i<count;i++){
        migrationsArr.push({
            sourceCluster: faker.lorem.slug(),
            sourceNamespace: faker.lorem.slug(),
            targetCluster: faker.lorem.slug(),
            targetNamespace: faker.lorem.slug()
        })
    }
    return migrationsArr;
}

module.exports = {
    generateMockMigrations
}