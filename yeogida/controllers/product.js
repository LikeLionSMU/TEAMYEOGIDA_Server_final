var express = require('express');
var router = express.Router();
var client_id = '_KCAgzwvJUK48fsicvgj';
var client_secret = 'v7WbCJgG75';
var request = require('request');



router.get('/info',function(req,res){
  var infoModel = require('../models/product_info');

  var productpid=req.query.productpid;

  infoModel.info(productpid)
  .then(data=>{
    res.send(data);
    return data;
  });




});


router.post('/register',function(req,res){
  var registerModel = require('../models/product_register');
  var map=require('./map_api');
  var register_info=req.body;
  map.getPoint(register_info.productaddress).then(function(point){

    registerModel.register(register_info,point[0],point[1]);

  });

});

router.post('/update',function(req,res){
  var updateModel = require('../models/product_update');
  var map=require('./map_api');
  var update_info=req.body;
  map.getPoint(update_info.productaddress).then(function(point){

    updateModel.update(update_info,point[0],point[1]);

  });
});

router.post('/delete',function(req,res){
  var deleted = require('../models/product_delete');
});

router.post('/complete',function(req,res){
  var complete = require('../models/product_complete');
});

module.exports = router;
