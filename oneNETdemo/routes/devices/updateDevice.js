/**
 * Created by yanghuan on 2017/6/21.
 */
let request=require("request");
module.exports=function (app) {
    app.post("/updateDevices",function (req, res) {
        let option={
            method:"put",
            url:'http://api.heclouds.com/devices/7836722',
            headers:{
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                "api-key":"hHYIEVl73LlKhE3AoAPmW5xPaNU="
            },
            body:{
                "title":"newDev",
                "desc": "some description",       //设备描述（可选）
                "tags": ["china","mobile"] ,          //设备标签（可选）
                "protocol":"HTTP",  //选择一种接入协议（可选）
                "location": {"lon":106, "lat": 29, "ele": 370}, //设备位置{"经度", "纬度", "高度"}（可选）
                "private": false,
                "auth_info": {"1362314148":"000000054350"},
                "interval": 60,
                "other": {"version": "1.0.0", "manufacturer": "china mobile"}
            },
            json:true
        };
        request(option,function (err,response,body) {
            console.log(body);
            res.send(body)
        });
    })
};