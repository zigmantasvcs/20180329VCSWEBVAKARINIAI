const express = require('express');
const app = express();

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
    next()
});

var fs = require('fs'),
    path = require('path'),    
	filePath = path.join(__dirname, 'start.json');
var datas;


fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) throw err;
  datas = JSON.parse(data);
});

app.listen(3000, function(res) {
	console.log('listening on 3000')
})
app.get('/', (req, res) => {
  res.send(datas)
})