const db = require('./db');

module.exports = {
    getStudents: async () => await db.q('select * from student, department where student.Dname = department.Dname'),
    add: async data => await db.q('insert into student values (?,?,?,?,?,?)', Object.values(data)),
    delBySno: async sno => await db.q('delete from student where Sno = ?', [sno]),
    update: async data => await db.q('update student set Sno = ?, Sname = ?, Ssex = ?, Sage = ?, Clno = ?, Dname = ? where Sno = ?', [...Object.values(data), data.Sno])
};