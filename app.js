var request = require('request');
var async = require('async');
var constants = require('./constants');
var loginUrl = constants.URL + constants.SecurityURL;
var dataUrl = constants.URL + constants.DataURL;

var j = request.jar();

async.waterfall([function(callback){
    var r = request.post({url:loginUrl, jar:j, form:{'j_username':'testuser%40siftit.com', 'j_password':'codeit'}}, function(err, resp, body){
      if(err){callback(err, null);}
      callback(null, j.getCookieString(constants.URL).split(';')[0]);
    });

  },function(sessionId, callback){
      console.log(sessionId);
      request.get({url:constants.URL, jar:j, 
        headers:{'Referer': 'http://theqebox.siftit.net/', 'Cookie': '_ga=GA1.3.1967976144.1413078724; _gat=1;userType=RestaurantUser;' + sessionId}///data/session?_=1413078766256
        }, function(err, resp, body){
          if(err){callback(err, null);}
          console.log(resp);
          callback(null, sessionId);
      });
  },function(sessionId, callback){
      console.log(sessionId);
      request.get({url:constants.URL + '/data/session?_=1413078766256', jar:j, 
        headers:{'Referer': 'http://theqebox.siftit.net/login.html', 'Cookie': sessionId}///data/session?_=1413078766256
        }, function(err, resp, body){
          if(err){callback(err, null);}
          console.log(body);
          callback(null, sessionId);
      });
  },function(sessionId, callback){
      console.log(sessionId);
      request.get({url:dataUrl, jar:j, 
        headers:{'Referer': 'http://theqebox.siftit.net/login.html', 'Cookie': sessionId}
        }, function(err, resp, body){
          if(err){callback(err, null);}
          //console.log(j);
          callback(null, body);
      });
  }],function(err, results){//callback
    console.log(results);
});
