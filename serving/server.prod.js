/* This is a single page App server that may be OK for production? */
const express = require('express');
const compression = require('compression');

const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const PORT = process.env.PORT || 80;
const HTTPS_PORT = process.env.HTTPS_PORT || 443;
const DOMAIN = process.env.DOMAIN || 'localhost';

const publicPath = path.resolve(__dirname, '..', 'build');
const indexHtmlPath = path.join(publicPath, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// Attempt to start an Express App with HTTPS
startApp(setupHTTPS(), setupExpressApp());

function setupHTTPS () {
  // LetsEncrypt! You should use HTTPS in production for EVERYTHING
  const certPath = path.resolve(`/etc/letsencrypt/live/${DOMAIN}/`);
  let httpsOptions = {};
  try {
    httpsOptions = {
      key: fs.readFileSync(path.join(certPath, 'privkey.pem')),
      cert: fs.readFileSync(path.join(certPath, 'fullchain.pem'))
    };
  } catch (e) {
    console.info('Could not read privateKey or certifiate. Unable to launch HTTPS, falling back to HTTP.');
  }
  return httpsOptions;
}

function setupExpressApp () {
  // TODO: Implement 404s for your own routes
  const validRoutes = [ '', '/about' ];
  function isValidRoute (path) {
    // strip off trailing slash
    path = /\/$/.test(path)
      ? path.substr(0, path.length - 1)
      : path;
    return validRoutes.includes(path);
  }

  const app = express();
  app.use(compression()); // gzip responses
  app.use(express.static(publicPath)); // serve static assets normally

  app.get('*', function redirectToIndex (req, res) {
    // redirect all routes to index.html
    if (!isValidRoute(req.url)) {
      res.statusCode = 404;
    }
    res.end(indexHtml);
  });

  return app;
}

function startApp (httpsOptions, app) {
  if (httpsOptions.key && httpsOptions.cert) {
    http.createServer(function redirectToHttps (req, res) {
      res.setHeader('Location', 'https://' + req.headers.host + req.url);
      res.statusCode = 302;
      res.end('<!-- Hello Developer Person! Please use HTTPS instead -->');
    }).listen(PORT);
    https.createServer(httpsOptions, app).listen(HTTPS_PORT);
    console.log('HTTPS server started on ' + DOMAIN + ':' + HTTPS_PORT);
  } else {
    http.createServer(app).listen(PORT);
    console.log('HTTP server started on ' + DOMAIN + ':' + PORT);
  }
}
