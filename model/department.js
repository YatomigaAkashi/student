const db = require('./db');

module.exports = {
    getDepartments: async () => await db.q('select * from department')
};