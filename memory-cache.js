Function.prototype.memoize = function() {
  var thisFunction = this;
  var cache = {};

  return function( arg ) {
    if(arg in cache) {
      console.log('cache hit');
      return cache[arg];
    } else {
      console.log('not in cache, caching');
      cache[arg] = thisFunction(arg);
      return cache[arg];
    }
  };
};

var memoizeQuerySelector = document.querySelector.bind(document).memoize();
var memoizeGetElementById = document.getElementById.bind(document).memoize();

/*module.exports = {
  memoizeQuerySelector: memoizeQuerySelector,
  memoizeGetElementById : memoizeGetElementById
};*/