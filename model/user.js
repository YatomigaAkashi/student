const db = require('./db');

module.exports = {
    getUser: async val => await db.q('select * from user where username = ?', [val])
};