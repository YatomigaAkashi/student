const jwt = require('jsonwebtoken');

// 生成
function createToken(data, key, time) {
    let { uid, username } = data;
    return jwt.sign({
        username, uid
    }, key, {expiresIn: time});
}

// 验证登录，没有token或者过期不予放行
async function checkToken(ctx, next, key) {
    // ctx.request.url = ctx.request.url.replace('/api', '');

    // 判断是否为user路由，是的话予以放行
    if (!ctx.request.url.startsWith('/user')) {
        await next();
    } else {
        // 验证是否有token
        let token = ctx.request.header.authorization;
        if (!token){
            ctx.body = {
                code: '003',
                msg: '没有登录',
            };
            return
        }

        // token过期
        token = token.split(' ')[1];
        let res = jwt.decode(token, key);
        //  获取到token
        if (res && res.exp <= new Date()/1000){
            ctx.body = {
                code: '003',
                msg: '登录过期',
            };
            return;
        }

        // token通过
        await next();
    }
}

module.exports = (key, time) => {
    return async (ctx, next) => {
        await checkToken(ctx, next, key);
        if (ctx.myTokenUser) {
            ctx.body.data.tk = createToken(ctx, key, time);
        }
    }
};