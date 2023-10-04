"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qcobjects_1 = require("qcobjects");
class QCObjectsAdmin extends qcobjects_1.BackendMicroservice {
    constructor(microservice) {
        microservice.body = `<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- This is a wide open CSP declaration. To lock this down for production, see below. -->
    <meta http-equiv="Content-Security-Policy" content="default-src * 'self' 'unsafe-inline' 'unsafe-eval' data: gap: https://ssl.gstatic.com; img-src * 'self' data:; child-src *; style-src * 'self' 'unsafe-inline' 'unsafe-eval'; script-src * 'self' 'unsafe-inline' 'unsafe-eval'; connect-src * 'self' 'unsafe-inline' 'unsafe-eval';media-src *">
    <title>QCObjects Admin</title>
    <meta name="description" content="QCObjects Admin">
    <link rel="canonical" href="https://admin.qcobjects.dev/">
    <link rel="manifest" href="manifest.json">
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="application-name" content="QCObjects Admin">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="QCObjects Admin">
    <link rel="icon" sizes="192x192" href="./img/icons/icon-192x192.png">
    <link rel="apple-touch-icon" href="./img/icons/icon-192x192.png">
    <meta name="msapplication-TileImage" content="./img/icons/icon-144x144.png">
    <meta name="msapplication-TileColor" content="rgb(1,1,1)">
    <meta name="theme-color" content="rgb(1,1,1)">
    <meta property="og:title" content="QCObjects Admin">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://admin.qcobjects.dev/img/icons/icon-192x192.png">
    <meta property="og:url" content="https://admin.qcobjects.dev/">
    <meta property="og:description" content="QCObjects Admin">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="https://admin.qcobjects.dev/">
    <meta name="twitter:title" content="QCObjects Admin">
    <meta name="twitter:description" content="QCObjects Admin">
    <meta name="twitter:image" content="https://admin.qcobjects.dev/img/icons/icon-192x192.png">
    <meta name="twitter:creator" content="@jeanmachuca">
    <base href="/admin/" target="_self">
  </head>

<body>
  <noscript>
    <!-- anchor linking to external file -->
    <p>This page needs JavaScript because it uses QCObjects (https://qcobjects.com)</p>
  </noscript>
  <splash-screen componentClass="CubeSplashScreenComponent" 
  duration="3000" data-background="black" 
  data-cube_image="./img/logo-qcobjects-back-bg-white-icon.svg"></splash-screen>
  <layout-basic splashscreen componentClass="MainComponent" controllerClass="MainController" serviceClass="AuthConnectService" response-to=data >
  </layout-basic>
  <script type="module" src="js/init.js" defer></script>
</body>

</html>
    
    `;
        super(microservice);
    }
}
exports.default = QCObjectsAdmin;
