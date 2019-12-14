const department = require('../model/department');

module.exports = {
    getDepartments: async ctx => {
        let result = await department.getDepartments();
        if (!result) {
            ctx.body = {
                code: '002',
                msg: '获取数据库数据失败'
            };
            return;
        }
        ctx.body = {
            code: '001',
            msg: '成功获取数据',
            data: result
        };
    }
};