/**
 * The model for user
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    name:{ type:String },
    age:{ type:String },
    id:{ type:Schema.ObjectId },
    createTime:{ type:Date, default:Date.now },
    sex:{ type:Boolean,default:true }
});

mongoose.model('users', schema);