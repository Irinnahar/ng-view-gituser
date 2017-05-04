var express = require('express');
	app = express();
var port = process.env.PORT || 8000;
app.use(express.static('public/'));

app.listen(port, function(){
	console.log('localhost:8000');
})
