var productinfo=require('../config/database').productinfo;
var productsearch = require('../config/database').productsearch;

// 제품 정보 돌려주기
exports.info=(productpid)=> productinfo.findAll({
  attributes : {exclude : ['producthit','productphone']},
  where : {productpid: productpid}
}).then(function (result){
  var product_result=[];
  for(var i=0; i<result.length;i++){
    product_result[i]=result[i].dataValues;
  }
  return product_result;
});

// 최근 본 상품 추가
exports.insert_search = (data) => productsearch.findOrCreate({
  where : {search_personpid : data.personpid, search_productpid : data.productpid}
});

// hit++
exports.hit = (productpid) => productinfo.increment('producthit',{where : {productpid : productpid}});
