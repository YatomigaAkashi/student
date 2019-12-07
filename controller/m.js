const m = require('../model/m');

module.exports = {
    getMs: async ctx => {
        let result = await m.getMs();
        if (!result) {
            ctx.body = {
                code: '002',
                msg: '获取数据库数据失败'
            };
            return;
        }
        ctx.body = {
            code: '001',
            msg: result
        };
    }
};