const Router = require('koa-router');
const router = new Router();
const classController = require('../controller/class');

router.get('/class/getClno', classController.getClno);

module.exports = router;