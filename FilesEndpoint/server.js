// import http
const http = require('node:http');

const fileSystem = require('./fileSystem'); // import fileSystem module


const server = http.createServer(async (req, res) => {
  if (req.method == "GET") {
    //case empty url
    if(req.url == '/') {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Write the file path in ther url.\n');
    } else {
        try {
            // get the last index of / to prevent the user from getting data outside this folder in the server.
            lastIndex = req.url.split("").lastIndexOf("/")+1;

            data = await fileSystem.readFileAsync(req.url.slice(lastIndex));

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({content: data}));
        } catch (error) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({error: error.message}));
        }
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end("Method Not allowed!")
  }
});

// starts a server on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

