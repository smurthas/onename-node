var request = require('request');

function Onename(options) {
  this.appID = options.appID;
  this.appSecret = options.appSecret;
  this.baseURL = options.baseURL || 'http://api.onename.co/v1';
}

Onename.prototype.apiCall = function(options, callback) {
  if (!(options.appID && options.appSecret)) {
    options.appID = this.appID;
    options.appSecret = this.appSecret;
  }

  options.auth = {
    user: options.appID,
    pass: options.appSecret
  };

  if (!options.json) {
    options.json = true;
  }

  request(options, callback);
};

Onename.prototype.profiles = function(openname, callback) {
  this.apiCall({
    uri: this.baseURL + '/users/' + openname,
    method: 'get'
  }, callback);
};

Onename.prototype.verifications = function(openname, callback) {
  this.apiCall({
    uri: this.baseURL + '/users/' + openname + '/verifications',
    method: 'get'
  }, callback);

};

Onename.prototype.search = function(query, callback) {
  this.apiCall({
    uri: this.baseURL + '/search',
    qs: {
      query: query
    },
    method: 'get'
  }, callback);
};

module.exports = Onename;
