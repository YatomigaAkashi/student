const Router = require('koa-router');
const router = new Router();
const pd = require('../controller/pd');

router.get('/pd/getPds', pd.getPds);

module.exports = router;