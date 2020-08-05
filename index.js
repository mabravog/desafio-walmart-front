const http = require('http');
function requestListener(req, res) {
    res.writeHead(200);
    res.end();
}
const server = http.createServer(requestListener);
server.listen(process.env.PORT || 5000);