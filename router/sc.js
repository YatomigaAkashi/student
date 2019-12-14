const Router = require('koa-router');
const router = new Router();
const sc = require('../controller/sc');

router.get('/sc/getScs', sc.getScs);

module.exports = router;