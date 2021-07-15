const Koa = require('koa');

const app = new Koa();

app.use(async (ctx,next) => {
    if(ctx.path === '/') {
        ctx.body = '<h1>Welcome to index page!</h1>';
    } else if(ctx.path === '/aboutme') {
        ctx.body = '<h1>Welcome to about me page!</h1>';
    } else if(ctx.path === '/contact') {
        ctx.body = '<h1>Welcome to contact page!</h1>';
    } else {
        ctx.body = '<h1>404 Page Not Found</h1>';
    }
});

const port = 3000;
app.listen(port);