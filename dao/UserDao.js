/**
 * Blog DAO
 */
var BaseDao = require('./BaseDao');
var User = require('../model').users;
var UserDao = new BaseDao(User);

module.exports = UserDao;
