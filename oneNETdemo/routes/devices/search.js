/**
 * Created by yanghuan on 2017/6/21.
 */
let request=require("request");
module.exports=function (app) {
    app.post("/search",function (req, res) {
        let option={
            method:"get",
            url:'http://api.heclouds.com/devices/7143276',
            headers:{
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                "api-key": "hHYIEVl73LlKhE3AoAPmW5xPaNU="
            },
            body:{

            },
            json:true
        };
        request(option,function (err,response,body) {
            console.log(body);
            res.send(body)
        });
    })
};