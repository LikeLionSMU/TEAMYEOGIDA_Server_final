var productinfo=require('../config').productinfo;

exports.info=(productpid)=> productinfo.findAll({
  where : {productpid: productpid}
}).then(function (result){
  var product_result=[];
  for(var i=0; i<result.length;i++){
    product_result[i]=result[i].dataValues;
  }
  return product_result;
});
