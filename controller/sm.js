const sm = require('../model/sm');

module.exports = {
    getSms: async ctx => {
        let result = await sm.getSms();
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