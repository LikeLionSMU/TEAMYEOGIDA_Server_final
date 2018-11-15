var express = require('express');
var router = express.Router();
var client_id = '_KCAgzwvJUK48fsicvgj';
var client_secret = 'v7WbCJgG75';
var request = require('request');

exports.getPoint=(adr)=> {
  return new Promise(function(resolve,reject){
    var api_url = 'https://openapi.naver.com/v1/map/geocode?query=' + encodeURI(adr); // json
    var options = {
      url: api_url,
      headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };

    request.get(options,function(err,res,body){
      if(!err && res.statusCode==200){
          var jsonContent=JSON.parse(body);
          var pointX=jsonContent.result.items[0].point.x;
          var pointY=jsonContent.result.items[0].point.y;
          var point=[pointX,pointY];
          resolve(point);
      }else{
        throw err;
      }
    });
  });

};
