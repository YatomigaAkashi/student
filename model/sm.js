const db = require('./db');

module.exports = {
    getSms: async () => await db.q('select * from sm')
};