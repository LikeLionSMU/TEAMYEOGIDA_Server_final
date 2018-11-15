var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var multer = require('multer');
var upload = multer();

router.post('/',upload.fields([]),function(req,res,next){
  var loginModel = require('../models/login');

  // 로그인 정보 받아오기
  var login_info = req.body;

  // 로그인정보 저장하고 personpid 가져오기
  loginModel.login(login_info)
    .then(data=>{
      return data.personpid;
    })
    .then(personpid=>{
      // 토큰 생성
      var secret = 'yeogida';
      var payLoad  = {personpid : personpid};
      var options = { algorithm : 'HS256'};
      var token = jwt.sign(payLoad,secret,options,function(err,token){
       if (err) throw err;
       // 생성한 토큰 저장
       loginModel.savetoken(personpid,token);
     });
     res.json({
       personpid : personpid
     });
   });
});


module.exports = router;
