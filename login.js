var request = require('request');
var constants = require('./constants');
var url = constants.URL + constants.SecurityURL;

var j = request.jar();
var r = request.port({url:url, jar:j}, function callback(err, httpResponse, body){
		if(err){console.log('An error occurred during the request')}
		console.log(body);
		console.log(j.getCookieString(constants.URL));
	}
);


var form = r.form();
form.append('j_username', 'testuser%40siftit.com');
form.append('j_password', 'codeit');

//request({url: url, jar: j}, function () {
//  var cookie_string = j.getCookieString(uri); // "key1=value1; key2=value2; ..."
//  var cookies = j.getCookies(uri); 
  // [{key: 'key1', value: 'value1', domain: "www.google.com", ...}, ...]
//})