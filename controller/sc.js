const sc = require('../model/sc');

module.exports = {
    getScs: async ctx => {
        let sno = ctx.request.query.Sno;
        let result = await sc.getScs(sno);
        if (!result) {
            ctx.body = {
                code: '002',
                msg: '获取数据库数据失败'
            };
            return;
        }
        ctx.body = {
            code: '001',
            msg: '获取数据成功',
            data: result
        };
    }
};