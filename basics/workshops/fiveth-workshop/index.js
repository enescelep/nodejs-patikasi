const http = require('http');

const server = http.createServer((req, res) => {

   const url = req.url;

   if(url === '/') {
       res.writeHead(200, {'Content-Type':'text/html'});
       res.write('<h2>Welcome to index page!</h2>')
   } else if(url === '/aboutme') {
       res.writeHead(200, {'Content-Type':'text/html'});
       res.write('<h2>Welcome to about me page!</h2>');
   } else if(url === '/contact') {
       res.writeHead(200, {'Content-Type':'text/html'});
       res.write('<h2>Welcome to contact page!</h2>');
   } else {
       res.writeHead(404, {'Content-Type':'text/html'});
       res.write('<h2>404 Not Found</h2>');
   }

    console.log('An request attempted.');
    res.end();
});


const port = 5000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});