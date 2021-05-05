let http = require('http');
let fs = require('fs');
let url = require('url');
http.createServer(function (req, res) {
	if (req.url === '/') {
		fs.readFile('./static/index.html', function (err, data) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	} else if (req.url === '/about') {
		fs.readFile('./static/about.html', function (err, data) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	} else if (req.url === '/contact-me') {
		fs.readFile('./static/contact-me.html', function (err, data) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	} else {
		fs.readFile('./static/404.html', function (err, data) {
			res.write(data);
			return res.end();
		});
	}
}).listen(8080);
