/**
 * New node file
 */
var mongoose = require('mongoose');
var config = require('../config');
var fs = require('fs');
//var log = require('./../libs/log');

mongoose.connect(config.db);

var db = mongoose.connection;
db.on('error', function(err){
    console.error('connect to %s error: ', config.connectionstring, err.message);
    process.exit(1);
});
db.once('open', function () {
	console.info('success connected!');
});

var models_path = __dirname + '/../model/mappings/'
fs.readdirSync(models_path).forEach(function (file) {
    require(models_path + '/' + file);
    var modelName = file.replace('Model.js', '');
    console.log(modelName);
    exports[modelName] = mongoose.model(modelName);
});