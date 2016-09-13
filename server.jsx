const express = require('express');
const HTML = require('./dist/index.html');

const app = express();

app.use((req, res) => {
	res.end(HTML);
});

module.exports = app;