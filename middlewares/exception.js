const {HttpException} = require('../core/http-exception')

const CatchError=async (ctx,next)=>{
    try {
        await next()
    } catch (error) {
        console.log("err",error)
        if(error instanceof HttpException){
            ctx.body={
                message:error.message,
                code:error.code,
                data:null
            }
        }else{
            ctx.body={
                message:'未知错误',
                code:99999,
                data:null
            }
        }
    }
}

module.exports=CatchError