var assert = require('assert');

var Onename = require('../index.js');

describe('api', function() {
  this.timeout(30000);

  var client = new Onename({
    appID: 'demo-1234',
    appSecret: 'demo-1234'
  });

  it('should find a user in a search', function(done) {
    client.search('fredwilson', function(err, resp, body) {
      assert.ifError(err);
      assert(resp);
      assert.equal(resp.statusCode, 200);
      assert(body);
      assert(body.results);
      assert(body.results.length);

      done();
    });
  });

  it('should lookup an individual profile', function(done) {
    client.profiles('fredwilson', function(err, resp, body) {
      assert.ifError(err);
      assert(resp);
      assert.equal(resp.statusCode, 200);
      assert(body);
      assert(body.profile);

      done();
    });
  });

  it('should lookup an individual profile\'s verifications', function(done) {
    client.verifications('fredwilson', function(err, resp, body) {
      assert.ifError(err);
      assert(resp);
      assert.equal(resp.statusCode, 200);
      assert(body);
      assert(body.verifications);

      done();
    });
  });
});
