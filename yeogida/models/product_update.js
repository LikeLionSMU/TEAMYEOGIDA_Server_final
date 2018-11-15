var productinfo=require('../config/database').productinfo;

exports.update=(update_info,productpid)=> productinfo.update(update_info,
  {where:{'productpid':productpid}}
).catch(function(err){
  throw err;
});
