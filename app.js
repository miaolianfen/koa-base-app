const App=require('koa')
const parser=require('koa-bodyparser')
const InitManager=require('./app/core/init')
const CatchError=require('./app/middlewares/exception')

const app=new App()
//全局捕获异常
app.use(CatchError)
app.use(parser())
//初始化，自动注册路由
InitManager.init(app)
app.listen(3000)