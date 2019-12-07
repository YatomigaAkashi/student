const Router = require('koa-router');
const router = new Router();
const department = require('../controller/department');

router.get('/department/getDepartments', department.getDepartments);

module.exports = router;