const db = require('./db');

module.exports = {
    getClasses: async () => await db.q('select Clno, class.Pname, Dname, Cnum, Cyear from class, pd where class.Pname = pd.Pname'),
    getClno: async () => await db.q('select Clno from class group by Clno'),
    getDnameByClno: async clno => db.q('select Dname from class, pd where class.Pname = pd.Pname and class.Clno = ?', [clno])
};