'use strict'
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');


//Certificate for HTTPS:
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('d_key.key');
var certificate = fs.readFileSync('cert.pem');

var credentials = {key: privateKey, cert: certificate};
var app = express();


//AllRoutes
const getTrueClientIpRoutes = require('./routes/getTrueClientIpRoutes');
const getImageRoutes = require('./routes/getImagesRoutes');
const getVideoRoutes = require('./routes/getVideoRoutes');



// const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


//App Use
app.use('/TrueClientIp', getTrueClientIpRoutes.routes);
app.use('/Images', getImageRoutes.routes);
app.use('/Video', getVideoRoutes.routes);
app.use(express.static('public'));

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

//Prod
httpServer.listen(80);
httpsServer.listen(443)

//LocalHost
//httpServer.listen(8081);
//httpsServer.listen(80)