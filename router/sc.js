const Router = require('koa-router');
const router = new Router();
const sc = require('../controller/sc');

router.get('/course/getCourses', sc.getScs);

module.exports = router;