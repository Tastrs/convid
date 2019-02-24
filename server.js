const express = require('express');

const app = express();
const port = 8080;

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

var server = app.listen(8080, function() {
    console.log('Ready on port %d', server.address().port);
});