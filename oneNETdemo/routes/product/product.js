/**
 * Created by yanghuan on 2017/6/22.
 */
module.exports=function (app) {
    app.route("/product")
        .get(function (req, res) {
            res.render("productIndex",{title:"物联网云开发者中心"})
        });
    
};