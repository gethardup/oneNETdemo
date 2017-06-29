/**
 * Created by yanghuan on 2017/6/28.
 * */
module.exports=function (app) {
    app.get("/",function (req, res) {
        let hasUser=!!req.session.user;
        console.log(hasUser);
        res.render("index",{title:"OneNET home page","hasUser":hasUser});
    });
    require("./login")(app);
    require("./register")(app);
};