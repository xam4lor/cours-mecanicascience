// Get dependencies
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

// Get API routes
const api = require("./routes/api");
const app = express();
const path = __dirname + "/public/dist/cours-mecanicascience";

// Configure for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path));

// Set routes
app.use('/api', api); // API
app.get('*', (req, res) => { // Angular
    res.sendFile(path + "/index.html");
});

// Set port for express
const port = process.env.PORT || "8080";
app.set("port", port);

// Create server and listen on port
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
