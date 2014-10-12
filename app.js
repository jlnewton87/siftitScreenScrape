var cp = require('child_process').spawn('./phantomjs.exe', ['phantom.js']);
var months = ['Jan ', 'Feb ', 'Mar ', 'Apr ', 'May ', 'Jun ', 'Jul ', 'Aug ', 'Sep ', 'Oct ', 'Nov ', 'Dec ']

cp.stdout.on('data', function(data){
  data = data.toString('utf8');
  var orders = JSON.parse(data);
  for(var i = 0; i < orders.length; i++){
    var type = orders[i].orderSheetType;
    var date = new Date(orders[i].datePlaced);
    var dateString = months[date.getMonth()] + date.getDate();
    console.log(type + '|--->Ordered>---|' + dateString);
  }
});