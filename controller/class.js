const classModel = require('../model/class');

module.exports = {
    getClasses: async ctx => {
        let result = await classModel.getClasses();
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
    },
    getClno: async ctx => {
        let result = await classModel.getClno();
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
    },
    getDnameByClno: async clno => {
        let result  = await classModel.getDnameByClno(clno);
        if (!result) {
            return false
        }
        return result;
    }
};