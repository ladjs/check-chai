
# Check Chai

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]
[![MIT License][license-image]][license-url]

> Adds chai helper function `chai.check` for asynchronous testing with multiple expect or assert statements.

> This is a simple helper function to call a series of `expect` or `assert` calls with `chai` in `mocha` (namely for use with asynchronous tests; based on <http://stackoverflow.com/a/15208067>)

> I built this package while I was writing tests for <https://github.com/niftylettuce/node-react-native-fetch-api>.

```bash
npm install --save check-chai
```

```js
var chai = require('chai');
var checkChai = require('check-chai');
var expect = chai.expect;
chai.use(checkChai);

describe('test', function() {

  it('should do something', function(done) {

    // imagine you have some API call here
    // and it returns (err, res, body)
    var err = null;
    var res = {};
    var body = {};

    chai.check(done, function() {
      expect(err).to.be.a('null');
      expect(res).to.be.an('object');
      expect(body).to.be.an('object');
    });

  });

});
```


## Contributors

* Nick Baugh <niftylettuce@gmail.com>


## Credits

* <http://stackoverflow.com/a/15208067>


## License

[MIT][license-url]


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-image]: http://img.shields.io/npm/v/check-chai.svg?style=flat
[npm-url]: https://npmjs.org/package/check-chai
[npm-downloads]: http://img.shields.io/npm/dm/check-chai.svg?style=flat
