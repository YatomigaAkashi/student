const db = require('./db');

module.exports = {
    getClasses: async () => await db.q('select * from class'),
    getClno: async () => await db.q('select Clno from class group by Clno'),
    getDnameByClno: async clno => db.q('select Dname from class, pd where class.Pname = pd.Pname and class.Clno = ?', [clno])
};