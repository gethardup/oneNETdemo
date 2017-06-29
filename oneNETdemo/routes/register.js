/**
 * Created by yanghuan on 2017/6/29.
 */
module.exports=function (app) {
  app.route("/register")
      .get(function (req, res) {
          res.render("register",{"title":"用户注册"});
      })
      .post(function (req, res) {

      })
};