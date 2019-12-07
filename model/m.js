const db = require('./db');

module.exports = {
    getMs: async () => await db.q('select * from m')
};