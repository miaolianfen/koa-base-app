const requireDirectory=require('require-directory')
const Router=require('koa-router')

class InitManager{
    static init(app){
        //把koa的实例传入，然后挂载在类上，以便下面能够直接使用路由中间件
        InitManager.app=app
        InitManager.initLoadRouters()
    }
    static initLoadRouters(){
        //获取绝对路径
        const dirPath=`${process.cwd()}/app/api`
        requireDirectory(module,dirPath,{visit:whenModuleLoad})

        function whenModuleLoad(obj){ 
            //判断是否是Router对象
            if(obj instanceof Router){  //导出整个router
                InitManager.app.use(obj.routes())
            }else if(obj instanceof Object){ //以对象的形似导出
                for(let key in obj){
                    if(obj[key] instanceof Router){
                        InitManager.app.use(obj[key].routes())
                    }
                }
            }
        }
    }
}

module.exports=InitManager