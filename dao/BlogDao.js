/**
 * Blog DAO
 */
var BaseDao = require('./BaseDao');
var Blog = require('../model').blog;
var BlogDao = new BaseDao(Blog);

module.exports = BlogDao;
