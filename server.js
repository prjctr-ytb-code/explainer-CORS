const express = require("express");
const server = express();
const cors = require("cors");

server.use(
    cors({
        origin: 'http://localhost:63342',
        credentials: true,
    })
);

server.get('/data', (req, res) => {
    res.json({
        data: 'Test',
    });
});

server.listen(3000);
