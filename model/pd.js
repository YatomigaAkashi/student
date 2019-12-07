const db = require('./db');

module.exports = {
    getPds: async () => await db.q('select * from pd')
};