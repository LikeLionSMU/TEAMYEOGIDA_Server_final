//넘겨받은 json에서 userpid 검색
var profile = require("../config/database").profile;
//var mysql= require("mysql");

exports.login = (login_info) => profile.findOrCreate({
  where : login_info
}).spread((user,created) =>{
  if (created){
    console.log("created");
  }
  return user.get();
});

exports.savetoken = (personpid,token) =>profile.update({token : token},
  {where : {personpid : personpid}}
);
