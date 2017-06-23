/**
 * Created by yanghuan on 2017/6/21.
 */
let http=require("http");
let util=require("util");
module.exports=function (app) {
    app.post("/add",function (req, response) {
        let body="";
        let data=util.inspect({
            "title":"devName",
            "private":'false',
            "uth_info": "201503041a58291514554",
            "auth_info": {"1362314148":"0000000000"},
    });
        let request=http.request({
           hostname:"api.heclouds.com",
            method:"post",
            path:"/devices",
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                "api-key":"hHYIEVl73LlKhE3AoAPmW5xPaNU="
            }
        },function (res) {
            console.log(res.statusCode);
            res.on("data",function (data) {
                body+=data
            }).on("end",function () {
                console.log(body);
                response.send(body);
            })
        }).on("error",function (e) {
            console.log("got error: %s",e.message);
        });
        request.write(data);
        request.end();
    });
};