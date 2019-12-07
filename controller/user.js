const user = require('../model/user');

module.exports = {
    doLogin: async ctx => {
        let { username, password } = ctx.request.body;
        let result = await user.getUser(username);
        if (result.length !== 0) {
            let data = result[0];
            let { uid, username } = data;
            if (password === data.password) {
                ctx.myTokenUser = data;
                ctx.body = {
                    code: '001',
                    msg: '登陆成功',
                    data: { uid, username }
                };
                return;
            }
        }
        ctx.body = {
            code: '002',
            msg: '用户名或者密码错误'
        };
    },
};