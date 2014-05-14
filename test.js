var app = require('./index.js'),
    should = require('chai').should();

describe('MySql Database', function () {
  it('should save a new name', function () {
    app.save('Johnson', function (id) {
      id.should.be.an('array');
    });
  });
  it('should retrieve that name', function () {
    app.get('Johnson', function (name) {
      name.should.equal('Johnson');
    });
  });
});
