const Router = require('koa-router');
const router = new Router();
const m = require('../controller/m');

router.get('/m/getMs', m.getMs);

module.exports = router;