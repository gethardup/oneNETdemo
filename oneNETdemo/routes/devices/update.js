/**
 * Created by yanghuan on 2017/6/21.
 */
let request=require("request");
module.exports=function (app) {
    app.post("/update",function (req, res) {
        let option={
            method:"put",
            url:'http://api.heclouds.com/register_attr',
            headers:{
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                "api-key": "hHYIEVl73LlKhE3AoAPmW5xPaNU="
            },
            body:{
                "allow_dup":"false"
            },
            json:true
        };
        request(option,function (err,response,body) {
            console.log(body);
            res.send(body)
        });
    })
};