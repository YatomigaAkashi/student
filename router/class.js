const Router = require('koa-router');
const router = new Router();
const classController = require('../controller/class');

router.get('/class/getClno', classController.getClno)
    .get('/class/getClasses', classController.getClasses);

module.exports = router;