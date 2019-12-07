const db = require('./db');

module.exports = {
    getTeachers: async () => await db.q('select * from teacher')
};