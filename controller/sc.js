const sc = require('../model/sc');

module.exports = {
    getScs: async ctx => {
        let result = await sc.getScs();
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