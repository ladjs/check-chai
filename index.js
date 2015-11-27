
// <http://stackoverflow.com/a/15208067>

module.exports = function(chai) {

  chai.check = function checkChai(done, f) {
    try {
      f();
      done();
    } catch (e) {
      done(e);
    }
  };

};
