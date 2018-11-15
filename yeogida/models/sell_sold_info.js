var productsell= require('../config/database').productsell;
var productinfo = require('../config/database').productinfo;

productinfo.belongsTo(productsell, {targetKey:'sell_productpid',foreignKey: 'productpid'});
exports.info=(personpid) =>productinfo.findAll({
    attributes : ['productpid', 'productname', 'formerprice', 'productprice', 'productdate_s', 'productdate_e','productimage',' productaddress'],
  where:{
      //사용 기한 지나지 않은 상품만 노출
      productdate_s :{gt: new Date()},
      //판매된 상품만 노출
      checker:1
  },
    //join의 조건
  include : {
    model: productsell,
    attributes : {exclude:["idx","sell_productpid","seller_personpid","checker"]},
    where :{seller_personpid: personpid}
  }
}).then((data)=>{
  var result=[];
  for(var i=0;i<data.length;i++){
    result[i]=data[i].dataValues;
  }
  return result;
});
