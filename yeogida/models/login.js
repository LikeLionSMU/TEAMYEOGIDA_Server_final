//넘겨받은 json에서 userpid 검색
var db = require("../config");
var mysql= require("mysql");

var login = function(login_info){
  var personpid;
  var select = "select personpid from profile where kakaopid='"+login_info[4]+"';";
  var insert = "INSERT INTO profile(phone,kakaonickname,kakaoPW,email,kakaopid) VALUES (?,?,?,?,?);";

  db.query(select,function(err,result){
    if (err) throw err;

    // 회원정보가 없으면 profile에 추가
    if (!result.length){
      console.log("not exist");
      db.query(insert,login_info,function(err){
        if (err) throw err;
        // 추가한 회원의 personpid 찾기
        db.query(select,function(err,rows){
          if (err) throw err;
          personpid = rows[0].personpid;
          return personpid;
        });
      });
    // 회원정보가 있으면 그 회원의 personpid 찾기
    }else{
      console.log("exist");
      personpid = result[0].personpid;
      return personpid;
    }
  });
};


module.exports = login;
