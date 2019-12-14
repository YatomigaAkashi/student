const db = require('./db');

module.exports = {
    getScs: async (sno) => await db.q('select * from sc, course where sc.Cno = course.Cno and sc.Sno = ?', [sno])
};