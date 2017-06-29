/**
 * Created by yanghuan on 2017/6/29.
 */
let models=require("./models");
let mongoose=require("mongoose");
for(var m in models){
    mongoose.model(m,mongoose.Schema(models[m]));
};
module.exports={
    getModel:function (type) {
        return _getModel(type)
    }
};
let _getModel=function (type) {
  return mongoose.model(type)
};