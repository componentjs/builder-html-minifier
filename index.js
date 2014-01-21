var minify = require('html-minifier').minify;

module.exports = function (options) {
  return function minifyHTML(file, done) {
    if (file.extension !== 'html') return done();
    file.read(function (err, string) {
      if (err) return done(err);
      file.string = minify(string, options);
      done();
    })
  }
}