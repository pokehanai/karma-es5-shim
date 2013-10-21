var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initShim = function(files) {
  files.unshift(createPattern(__dirname + '/../vendor/es5-sham.min.js'));
  files.unshift(createPattern(__dirname + '/../vendor/es5-shim.min.js'));
};

initShim.$inject = ['config.files'];

module.exports = {
  'framework:es5-shim': ['factory', initShim]
};

