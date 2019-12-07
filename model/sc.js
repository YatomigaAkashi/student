const db = require('./db');

module.exports = {
    getScs: async () => await db.q('select * from sc')
};