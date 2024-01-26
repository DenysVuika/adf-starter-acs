# ADF/ACS Application

Minimal ready-to-use project template pre-configured with [ADF components](https://github.com/Alfresco/alfresco-ng2-components).

## Features

- Simple and clean template to get started with ADF and ACS fast
- [Nx Workspace](https://nx.dev/getting-started/intro) support
- [ADF Components](https://github.com/Alfresco/alfresco-ng2-components) pre-configured:
  - Login Dialog
  - Document List
  - ACS File Viewer
  - Language menu

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

## Prerequisites

### Installing Node.js and NPM

Install the LTS (Long-Term Support) version of the Node.js: <https://nodejs.org/en/download/>

### MacOS

You can use the official macOS installer from the <https://nodejs.org/en/download/> page, it includes the NPM as well.

### Ubuntu

Use this article to get details on how to install Node.js and NPM on Ubuntu:
<https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/>

It is important to install the developer tools:

```sh
sudo apt install build-essential
```

### CentOS

Use this article to get details on how to install Node.js and NPM on CentOS:
<https://linuxize.com/post/how-to-install-node-js-on-centos-7/>

It is important to install the developer tools:

```sh
sudo yum install gcc-c++ make
```

## Build

Run `ng build` to build the project.  
The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
