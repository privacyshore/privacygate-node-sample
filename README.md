# Сoinbase Сommerce Nodejs

Full-stack integration crypto-payments for Nodejs

<!-- ![](/127.0.0.1_5500.png) -->
![](/tutorial.gif)

## Features

**Client-side**

* [x] Vuejs 2.x CDN

**Server-side**

* [x] Koa
* [x] Koa router
* [x] NeDB - local database
* [x] Nodemon
* [x] Webpack 4

## Server

PrivacyGate uses [Webhooks](https://privacygate.io/docs/#webhooks) to transfer payment information. In development to make local endpoint public, need to use [Ngrok](https://ngrok.com).

```node
$ ngrok http 3000 // after installation, run command
```

Webhook endpoint `http://localhost:3000/privacygate-webhook` => `https://<ngrok-host>/privacygate-webhook`

### Endpoints

* `localhost:3000/` - check endpoint
* `localhost:3000/checkout?total=99&count=1` - create payment url
* `localhost:3000/privacygate-webhook` - webhook

### Commands

```node
$ npm run start 
$ npm run build
```

## Articles

[Accept cryptocurrency payments with PrivacyGate](...)
