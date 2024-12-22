const crypto = require("node:crypto");
const util = require("node:util");

const asyncPbkdf2 = util.promisify(crypto.pbkdf2);

async function hashPassword(textPassword){
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = await asyncPbkdf2(textPassword, salt, 1000, 64, 'sha512');
    return `${hash.toString('hex')}.${salt}`
}

async function comparePassword(suppliedPassword, storedPassword){
    const [hashedPassword, salt] = storedPassword.split('.');
    const hashBuff = await asyncPbkdf2(
        suppliedPassword,
        salt,
        1000,
        64,
        'sha512'
    );
    return hashedPassword === hashBuff.toString('hex');
}

module.exports = {
    hashPassword,
    comparePassword
}