var page = require('webpage').create(),
    server = "http://theqebox.siftit.net",
    loginPart = "/j_spring_security_check",
    dataPart = "/data/order/top/5",
    login = 'j_username=testuser%40siftit.com&j_password=codeit';


page.onError = function(){
	//not doing anything here, need to keep js error coming from page from going to console output
};

page.open(server + loginPart, 'post', login, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        setTimeout(function(){
        page.open(server + dataPart, function(status){
        	if (status !== 'success') {
        		console.log('Could not access data!');
    		} 
    		var data = page.plainText;
        	page.close();
        	console.log(data);
    		phantom.exit();
        });
    }, 1000);
    }
});