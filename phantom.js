var page = require('webpage').create(),
    server = "http://theqebox.siftit.net/j_spring_security_check",
    data = 'j_username=testuser%40siftit.com&j_password=codeit';


page.onError = function(){
};

page.open(server, 'post', data, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        //console.log(page.content);
        setTimeout(function(){
        page.open('http://theqebox.siftit.net/data/order/top/5', function(status){
        	if (status !== 'success') {
        		console.log('Unable to post!');
    		} 
    		var data = page.plainText;
        	page.close();
        	console.log(data);
    		phantom.exit();
        });
    }, 1000);
    }
});