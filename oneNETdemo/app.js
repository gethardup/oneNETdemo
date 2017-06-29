/**
 * Created by yanghuan on 2017/6/28.
 */
let express=require("express");
let bodyParser=require("body-parser");
let path=require("path");
let mongoose=require("mongoose");
let route=require("./routes");
let session=require("express-session");
let app=express();
// let db=mongoose.connect("mongodb://localhost/test");
// let db=mongoose.createConnection("localhost","test");
// db.on("error",console.error.bind(console,"连接错误"));
// db.once("open",function () {
//    console.log("connect to the mongodb successfully");
// });
// let  Cat = db.model('Cat', mongoose.Schema({
//     name: String,
//     friends: [String],
//     age: Number,
// }));
// let kitty=new Cat({ name: 'Zildjian', friends: ['tom', 'jerry']});
// kitty.age=5;
// kitty.save(function (err) {
//   if(err){console.log(err)}
//   console.log("meow")
// });
// Cat.find({_id:'595466b490ed5e1f0c3e28bf'},function (err, cat) {
//     console.log(cat)
// });
// Cat.find(function (err, cats) {
//    console.log(cats);
// });
app.use(session({
    secret:"aaa",
    cookie:{
        maxAge:1000*60*15
    }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","html");
app.engine("html",require("ejs").renderFile);
route(app);
app.listen("3000",function (err) {
    if(err){console.log(err)}
    console.log("server has run on the port of %s",3000)
});