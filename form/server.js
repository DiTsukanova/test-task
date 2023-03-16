const http = require('http');
const url = require('url');


server = http.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    const urlParams = url.parse(req.url);

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