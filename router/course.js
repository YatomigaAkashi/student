const Router = require('koa-router');
const router = new Router();
const course = require('../controller/course');

router.get('/course/getCourses', course.getCourses);

module.exports = router;