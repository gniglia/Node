var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.getCategories = function(callback, limit) {
    Category.find(callback).limit(limit);
};

module.exports.getCategoryById = function(id, callback) {
    Category.findById(id, callback);
};
