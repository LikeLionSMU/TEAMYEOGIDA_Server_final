var express = require('express');
var router = express.Router();
var multer=require('multer');
var upload=multer();

router.post('/info',upload.fields([]),function(req,res){
  var infoModel = require('../models/search_info');
  var personpid=req.body.search_personpid;

  infoModel.info(personpid)
  .then((data)=>{
      res.json(data);
    }).then((err)=>{
      if (err) console.error(err);
    });
});

module.exports = router;
