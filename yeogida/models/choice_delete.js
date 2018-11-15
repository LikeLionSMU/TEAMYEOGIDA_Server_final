var productchoice=require('../config/database').productchoice;

exports.delete=(deleted_info)=>productchoice.destroy({
  where:deleted_info
}).catch(function(err){
  throw err;
})
