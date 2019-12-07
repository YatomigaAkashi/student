const Router = require('koa-router');
const router = new Router();
const teacher= require('../controller/teacher');

router.get('/teacher/getTeachers', teacher.getTeachers);

module.exports = router;