const requireDirectory=require('require-directory')
const Router=require('koa-router')

class InitManager{
    static init(app){
        InitManager.app=app
        InitManager.initLoadRouters()
    }
    static initLoadRouters(){
        //获取绝对路径
        const dirPath=`${process.cwd()}/app/api`
        requireDirectory(module,dirPath,{visit:whenModuleLoad})

        function whenModuleLoad(obj){
            //判断是否是Router对象
            if(obj instanceof Router){
                InitManager.app.use(obj.routes())
            }
        }
    }
}

module.exports=InitManager