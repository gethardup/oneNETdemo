/**
 * Created by yanghuan on 2017/6/28.
 */
let express=require("express");
let bodyParser=require("body-parser");
let path=require("path");
let route=require("./routes");
let app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","html");
app.engine(".html",require("ejs").renderFile);
route(app);
app.listen("3000",function (err) {
    if(err){console.log(err)}
    console.log("server has run on the port of %s",3000)
});