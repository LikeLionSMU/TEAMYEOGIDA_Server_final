var productinfo=require('../config/database').productinfo;
var productsell=require('../config/database').productsell;
var productpurchase=require('../config/database').productpurchase;

// productinfo update
exports.update_info = (productpid) => productinfo.update({checker:true},{where : {productpid : productpid}});

//productsell update
exports.update_sell = (productpid) => productsell.update({checker:true},{where : {sell_productpid : productpid}}).then((err)=>{ if(err) console.error(err)});

//insert purchase
exports.insert_purchase = (productpid,personpid) => productpurchase.findOrCreate({where : {buyer_personpid:personpid,sold_productpid:productpid}});
