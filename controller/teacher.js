const teacher = require('../model/teacher');

module.exports = {
    getTeachers: async ctx => {
        let result = await teacher.getTeachers();
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