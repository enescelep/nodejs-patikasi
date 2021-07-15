const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    if(url === '/') {
        res.writeHead(200, {'Content-Type': 'text-html'});
        res.write('<h1>You have entered to index.</h1>>');
    } else if(url === '/about') {
        res.writeHead(200, {'Content-Type': 'text-html'});
        res.write('<h1>You have entered to about page.</h1>');
    } else if(url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text-html'});
        res.write('<h1>You have entered to contact page.</h1>');
    } else {
        res.writeHead(404, {'Content-Type': 'text-html'});
        res.write('<h1><h1>404</h1></h1>');
    }

    console.log('An request attempted.');
    res.end();
})

const port = 3000;

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
})