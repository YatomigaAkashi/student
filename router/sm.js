const Router = require('koa-router');
const router = new Router();
const sm = require('../controller/sm');

router.get('/course/getCourses', sm.getSms);

module.exports = router;