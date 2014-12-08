# Onename ![Build Status](https://travis-ci.org/smurthas/onename-node.svg)

This this is a client library for the Onename API. See [their
docs](http://api.onename.co/docs) for details HTTP API spec.

Important: the Onename API is still in closed beta, so this is all subject to
change!

## Example usage

First:
```bash
npm install --save onename
```

```javascript
var client = require('onename')({
  appID: 'YOUR_APP_ID',
  appSecret: 'YOUR_APP_SECRET'
});

client.profiles('smurthas', function(err, resp, body) {
  // err, resp, and body are just like those from the request npm module
  console.log(body);
});
```

## Functions

* `profiles(openname, callback)`: Returns the profile data of the user with a given openname username.
    * `openname`: the Openname of the user to look up the profile for
    * `callback(err, resp, body)`: callback function

* `verifications(openname, callback)`: Takes in an openname username and returns the verifications for that user's profile (as well as the profile data itself).
    * `openname`: the Openname of the user to look up the profile for
    * `callback(err, resp, body)`: callback function

* `search(query, callback)`: Takes in a search query and returns a list of results that match the search. The query is matched against openname usernames, full names, and twitter handles.
    * `query`: the string to search for
    * `callback(err, resp, body)`: callback function

