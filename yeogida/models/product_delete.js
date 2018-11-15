var productinfo=require('../config/database').productinfo;

exports.delete=(productpid)=> productinfo.destroy({
  where : {productpid: productpid}
});
