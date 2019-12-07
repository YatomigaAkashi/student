const pd= require('../model/pd');

module.exports = {
    getPds: async ctx => {
        let result = await pd.getPds();
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