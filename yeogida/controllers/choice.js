var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();

//찜한 상품 리스트 보여주기(판매된거,이미 기한 지난건 x)
router.get('/info',function(req,res){
  var infoModel = require('../models/choice_info');

  infoModel.info(req.query.personpid)
    .then((data)=>{
      res.json(data);
    }).then((err)=>{
      if (err) console.error(err);
    });

  });

//찜한 상품 등록하기
router.post('/register',upload.fields([]),function(req,res){
  var registerModel = require('../models/choice_register');
  var register_info=req.body;
  registerModel.register(register_info);
  res.json({message:"success"});
});

//찜한 상품 productchoice에서 삭제하기
router.post('/delete',upload.fields([]),function(req,res){
  var deletedModel = require('../models/choice_delete');
  var deleted_info=req.body;
  deletedModel.delete(deleted_info);
});

module.exports = router;
