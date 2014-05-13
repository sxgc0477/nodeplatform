
/*
 * GET users listing.
 */
var UserDao = require('../dao/UserDao');

exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.test = function(req,res){
	var id = req.params.id;
	UserDao.getAll(function(err,datas){
		if(err){
			console.error(err);
		}
		console.log(datas);
		res.render("user",{title:'test',name:datas[0].name,createTime:datas[0].createTime});  
	});
		
};