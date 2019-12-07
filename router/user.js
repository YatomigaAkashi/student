const Router = require('koa-router');
const router = new Router();
const user = require('../controller/user');

router.post('/user/login', user.doLogin);

module.exports = router;