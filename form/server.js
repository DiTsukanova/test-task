const http = require('http');
const url = require('url');
const fs = require("fs");

const responce = (resp, status) => {
    resp.writeHead(status);
    resp.end();
}

const server = http.createServer((req, resp) => {
    const params = url.parse(req.url);
    if (req.method === 'GET' && params.path === '/') {
        fs.readFile('./index.html', "utf8", (err, data) => {
            if (err) {
                responce(resp, 500);
                return;
            }
            resp.end(data);
        });
        return;
    }

    if (req.method === 'GET' && params.path === '/style.css') {
        fs.readFile('./style.css', "utf8", (err, data) => {
            if (err) {
                responce(resp, 500);
                return;
            }
            resp.end(data);
        })
        return;
    }

    if (req.method === 'GET' && params.path === '/form.js') {
        fs.readFile('./form.js', "utf8", (err, data) => {
            if (err) {
                responce(resp, 500);
                return;
            }
            resp.end(data);
        })
        return;
    }

    if (req.method === 'GET' && params.pathname === '/form') {
        resp.setHeader('Content-Type', 'application/json');
        resp.end(JSON.stringify(params.query));
        return;
    }

    resp.writeHead(404);
    resp.end();
});

server.listen(8080);