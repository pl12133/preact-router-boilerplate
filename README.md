## preact-router-boilerplate

A single page application created with [Preact](https://github.com/developit/preact) and [preact-router](https://github.com/developit/preact-router). This boilerplate aims to help demonstrate some differences and similarities between the `preact-router` and `react-router` routing libraries. It is also a very generic starting point for a single page application.

Built with [Babel](https://github.com/babel/babel) and [Webpack](https://github.com/webpack/webpack).

###### [Demo Available](https://pl12133.github.io/preact-router-boilerplate/)

#### Features

  1. Easy development and easy production deployment.
  2. Simple generic starting point for a single page application with tooling all set up.
  3. Comments / annotations to help explain design decisions.

#### Install

Clone from Github and install with `npm`.

```sh
git clone https://github.com/pl12133/preact-router-boilerplate.git
cd preact-router-boilerplate
npm install
```

#### Development Flow

Start up a `webpack-dev-server` which will watch for changes in the `src/` folder. You can configure the `HOST` and `PORT` for the development server using environment variables. Defaults to `localhost:8080`:

```sh
export PORT=8080
export HOST=localhost
npm start
```
###### NOTE: Hot reloading is currently broken for this project.

#### Make it your own

If you plan on using `preact-router-boilerplate` as a starting point for a new project, you will want to clear `npm` and `git` information and replace it with your own.

```sh
npm init
git init
```

#### Production Build

If you intend to build for production, use `npm run deploy`. It will use a Webpack config with production optimizations like UglifyJS, and create your entire bundle in the `build/` folder.

There is an Express server built to serve single page applications over HTTPS. If you do not already use HTTPS in production, [you should start now](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https?hl=en). Valid signed certificates are now available FOR FREE from [LetsEncrypt.org](https://letsencrypt.org). You must set up `LetsEncrypt` to use HTTPS, the assumed path is `/etc/letsencrypt/${DOMAIN}/`.

To configure the production server, set `PORT`, `HTTPS_PORT` and `DOMAIN` environment variables.

```sh
export PORT=80
export HTTPS_PORT=443
export DOMAIN=example.com
npm run start:prod
```
###### NOTE: Only superusers can listen on ports below 1024.

#### Learn More

If you are new to Preact, visit the [official site](https://preactjs.com/) to get started. Knowledge of React will directly transfer over to Preact with a few API differences [listed here](https://preactjs.com/guide/differences-to-react).

If you are unfamiliar with Single Page Applications, start by learning the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). Understanding the History API will help you to understand the benefits and limitations of client side routing.

If you are entirely new to NPM, React, Webpack, and Babel; you should start with a [simpler guide](https://github.com/petehunt/react-howto).

#### Limitations

Currently there is no testing integration for this project.

#### Contributing

This project is focused on education about Preact, preact-router, and single page applications. Questions, comments, and contributions welcome.
