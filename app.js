var request = require('request');
var async = require('async');
var constants = require('./constants');
var loginUrl = constants.URL + constants.SecurityURL;
var dataUrl = constants.URL + constants.DataURL;

request = request.defaults({followAllRedirects:true});
var j = request.jar();

async.waterfall([function(callback){
    var r = request.post({url:loginUrl, jar:j, form:{'j_username':'testuser%40siftit.com', 'j_password':'codeit'}}, function(err, resp, body){
      if(err){callback(err, null);}
      console.log(j.getCookieString(constants.URL));
      j = j;
      callback(null, body)
    });

  },function(callback){
      console.log(j);
      console.log(j.getCookieString(constants.URL));
      request.get({url:dataUrl, jar:j, 
        headers:{'Referer': 'http://theqebox.siftit.net/login.html', 'Cookie': 'JSESSIONID=35596FEEBF91707F59EB118F9C9D6476'}
        }, function(err, resp, body){
          if(err){callback(err, null);}
          console.log(j);
          callback(null, body);
      });
  }],function(err, results){//callback
    console.log(results);
});
