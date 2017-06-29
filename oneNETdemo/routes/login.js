/**
 * Created by yanghuan on 2017/6/29.
 */
module.exports=function (app) {
  app.route("/login")
      .get(function (req, res) {
          res.render("login",{title:"用户登录"})
      })
};