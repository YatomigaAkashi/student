const db = require('./db');

module.exports = {
    getCourses: async () => await db.q('select * from course')
};