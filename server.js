"use strict";
const http = require("http");
const quotes = require("./quotes");

http.createServer((req, res) => {
    const i = Math.floor(Math.random() * 3);
    res.writeHead(200, {
        "Content-type": "text/plain"
    });
    res.write(quotes.quotes[i]);
    res.end();
}).listen(3000);