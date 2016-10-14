var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
  databaseURI: 'mongodb://mongo_host/parse', // Connection string for your MongoDB database
  cloud: process.env.PARSE_SERVER_CLOUD_CODE_MAIN || '/var/www/app/cloud/main.js', // Absolute path to your Cloud Code
  appId: process.env.PARSE_SERVER_APPLICATION_ID || 'my_app_id', //your app id
  masterKey: process.env.PARSE_SERVER_MASTER_KEY || 'my_master_key', // your master key, Keep this key secret!
  // fileKey: 'optionalFileKey',
  serverURL: process.env.PARSE_SERVER_URL || 'http://localhost:1337/parse', // Don't forget to change to https if needed
  logsFolder: process.env.PARSE_SERVER_LOGS_FOLDER || '/var/logs/parse'
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(1337, function() {
  console.log('parse-server running on port 1337.');
});