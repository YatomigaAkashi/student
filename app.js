const Koa = require('koa');
const app = new Koa();

app.listen('3000', () => {
    console.log('...running');
});



// --------中间件处理 start--------//
app.use(require('koa2-cors')());  // 跨域请求
app.use(require('koa-formidable')());  // 数据传输
app.use(require('./middleware/akashi-token')('akashi', '1h'));  // 自定义token中间件
// --------中间件处理 end--------//

// --------路由处理 start--------//
const user = require('./router/user');
app.use(require('./router/student').routes());
app.use(require('./router/course').routes());
app.use(require('./router/m').routes());
app.use(require('./router/pd').routes());
app.use(require('./router/teacher').routes());
app.use(require('./router/class').routes());
app.use(require('./router/department').routes());
app.use(require('./router/sc').routes());
app.use(require('./router/sm').routes());
app.use(user.routes());
app.use(user.allowedMethods());
// --------路由处理 end----------//
