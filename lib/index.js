var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initShim = function(files) {
  files.unshift(createPattern(__dirname + '/../es5-shim/es5-sham.js'));
  files.unshift(createPattern(__dirname + '/../es5-shim/es5-shim.js'));
};

initShim.$inject = ['config.files'];

module.exports = {
  'framework:es5-shim': ['factory', initShim]
};

