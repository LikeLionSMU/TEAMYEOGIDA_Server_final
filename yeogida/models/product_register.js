
var productinfo=require('../config').productinfo;

exports.register=(register_info,pointX,pointY)=> productinfo.create({

  productaddress_x :pointX,
  productaddress_y :pointY,
  productUrl:register_info.url,
  productname: register_info.productname,
  productimage: "drop",
  productdate_s: register_info.productdate_s,
  productdate_e: register_info.productdate_e,
  productaddress:  register_info.productaddress+register_info.productaddressdetail,
  formerprice:  register_info.formerprice,
  productprice:  register_info.productprice,
  text: register_info.text,
  personpid:register_info.personpid,
  productphone: register_info.productphone,

}).then(function(result){

}).catch(function(err){
  throw err;
});
