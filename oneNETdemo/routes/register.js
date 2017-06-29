/**
 * Created by yanghuan on 2017/6/29.
 */
module.exports=function (app) {
  app.route("/register")
      .get(function (req, res) {
          res.render("register",{"title":"用户注册"});
      })
      .post(function (req, res) {
          console.log(req.body);
          let User = global.dbHelper.getModel('user'),
              name = req.body.name;
          User.findOne({name: name}, function (error, doc) {
              if (error) {
                  res.sendStatus(500);
                  req.session.error = '网络异常错误！';
                  console.log(error);
              } else if (doc) {
                  req.session.error = '用户名已存在！';
                  res.sendStatus(500);
              } else {
                  User.create({
                      name: name,
                      password: req.body.pwd
                  }, function (error, doc) {
                      if (error) {
                          res.sendStatus(500);
                          console.log(error);
                      } else {
                          req.session.error = '用户名创建成功！';
                          res.sendStatus(200);
                      }
                  });
              }
          })
      })
}