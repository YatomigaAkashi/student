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
    let token = ctx.request.header.authorization;
    token = token.split(' ')[1];
    let res = jwt.decode(token, key);
    if (res){
        //  获取到token
        if (res && res.exp <= new Date()/1000){
            ctx.body = {
                code: '002',
                msg: '登录过期',
            };
        } else {
            await next();
        }
    } else {  // 没有取到token
        if (!ctx.request.url.startsWith('/user')){
            ctx.body = {
                code: '002',
                msg: '没有登录',
            };
        }
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