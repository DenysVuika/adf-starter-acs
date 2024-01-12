# ADF/ACS Application

Minimal ready-to-use project template pre-configured with ADF components.

## Quick start

```sh
npm install
npm start
```

Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

Running with a custom backend URL:

```sh
BASE_URL="https://your.alfresco.backend.com" npm start
```

### Proxy settings

The template provides certain proxy settings to allow running web application locally without CORS setup.
You can find details in the `proxy.conf.js` file.

## Build

Run `ng build` to build the project. 
The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
