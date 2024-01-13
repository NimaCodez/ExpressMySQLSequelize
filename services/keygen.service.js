const crypto = require('crypto');
const generateRandomHexKey = () => {
    return crypto.randomBytes(32).toString('hex');
};

console.log(generateRandomHexKey())