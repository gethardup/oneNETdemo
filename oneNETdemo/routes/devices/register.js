/**
 * Created by yanghuan on 2017/6/21.
 */
let fs=require("fs");
let request=require("request");
let util=require("util");
module.exports=function (app) {
    app.route("/register")
        .post(function (req,res,next) {
        let data=req.body;
        fs.writeFileSync("reqBody.txt",util.inspect(req.body));
        let option={
            method:"post",
            url:'http://api.heclouds.com/register_de?register_code='+data.registerCode,
            headers:{
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body:{
                "sn":data.sn,
                "title":data.title
            },
            json:true
        };
        request(option,function (err,response,body) {
            console.log(body);
            res.send(body)
        });
    })
};