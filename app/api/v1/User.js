const Router=require("koa-router")
const {ParameterException} =require('../../../core/http-exception')
const router=new Router({
    perfix:''
})

router.get("/info",(ctx,next)=>{
    ctx.body="hello world"
})
router.post("/add",(ctx,next)=>{
    const name=ctx.request.body.name
    ctx.body=name
})
module.exports=router