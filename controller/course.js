const course = require('../model/course');

module.exports = {
    getCourses: async ctx => {
        let result = await course.getCourses();
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