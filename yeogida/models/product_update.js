
var productinfo=require('../config').productinfo;

exports.update=(update_info,pointX,pointY)=> productinfo.update({

  productaddress_x :pointX,
  productaddress_y :pointY,
  productUrl:update_info.url,
  productname: update_info.productname,
  productimage: "drop that",
  productdate_s: update_info.productdate_s,
  productdate_e: update_info.productdate_e,
  productaddress:  update_info.productaddress+update_info.productaddressdetail,
  formerprice:  update_info.formerprice,
  productprice:  update_info.productprice,
  text: update_info.text,
  productphone: update_info.productphone,

},
{where:{personpid:update_info.personpid}}
).then(function(result){

    
}).catch(function(err){
  throw err;
});
