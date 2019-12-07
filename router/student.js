const Router = require('koa-router');
const router = new Router();
const student = require('../controller/student');

router.get('/student/getStudents', student.getStudents)
    .post('/student/add', student.add)
    .delete('/student/delete', student.delBySno)
    .put('/student/put', student.put);


module.exports = router;
