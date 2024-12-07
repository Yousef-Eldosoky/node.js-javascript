// import http
const http = require('node:http');

const fileSystem = require('./fileSystem'); // import fileSystem module
const { error } = require('node:console');


const server = http.createServer(async (req, res) => {
  if (req.method == "GET") {
    //case empty url
    if(req.url == '/') {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Write the file name in ther url.\n');
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
  } else if(req.method == "POST") {
    //case empty url
    if(req.url == '/') {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Write the file name in ther url.\n');
    } else {
        try {
            // get the last index of / to prevent the user from getting data outside this folder in the server.
            lastIndex = req.url.split("").lastIndexOf("/")+1;

            //file extension validation
            extension = req.url.slice(req.url.split("").lastIndexOf(".")+1);
            if (extension != "txt" && extension != "text") {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({error: "file extension should be .txt or .text"}));
                return;
            }

            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // convert Buffer to string
            });

            req.on('end', async () => {
                var bodyObj = JSON.parse(body);
                body = bodyObj.content;
                if (!body) { // check if the content in the content attribute
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({error: "Syntax error. Write the data in form of json file in content attribute."}));
                    return;
                }
                data = await fileSystem.writeFileAsync(req.url.slice(lastIndex), body);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({content: data}));
            });

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

