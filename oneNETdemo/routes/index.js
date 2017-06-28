/**
 * Created by yanghuan on 2017/6/28.
 */
module.exports=function (app) {
    app.get("/",function (req, res) {
        res.render("index",{title:"OneNET home page"});
    })
};