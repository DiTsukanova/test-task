const http = require('http');
const url = require('url');


server = http.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    const urlParams = url.parse(req.url);
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET',
        'Access-Control-Max-Age': 2592000
    };

    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
    }

    if (urlParams.pathname == '/form') {
        res.writeHead(200, headers);
        res.end(JSON.stringify({
            queryString: urlParams.query,
        }));
        return;
    }

    res.writeHead(400, headers);
    res.end(JSON.stringify({
        message: "Ошибка"
    }));

});

server.listen(8080);