# Apollo-Client-Standalone-Boiler
Apollo Client Standalone Boiler (Apollo-Client V3)

Boilerplate for Apollo Client Standalone without many references and no decent Starter or Boilerplate. Made for beginners like me.

**Backend** -> [Here](https://github.com/Ha-Young/Apollo-Server-Standalone-Boiler)



## Demo

Project Using this boiler : [Demo](https://memona.site)



## Feature

- Atomic Design Structure
- Authentication using JWT Token
- Support for file upload using graphql-upload
- Responsive App
- PWA
  - installing home screen
  - caching static data
  - caching fetch data
  - post request caching for graphQL when post data at offline

## Require

Node version : V12.22.1

## Install

1. Install Project node-modules

```
yarn
```

> use `yarn` for yarn.lock

2. The environment setting (.env file) must be entered as follows.

```
NODE_VERSION=12.22.1
REACT_APP_GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
REACT_APP_GRAPHQL_API_URI=<YOUR_GRAPHQL_SERVER_URI>
```

> **Guide**
>
> - REACT_APP_GOOGLE_CLIENT_ID: [Goolge API](https://console.cloud.google.com/apis/credentials?folder=&hl=ko&organizationId=&project=memona)의 OAuth 2.0 Client ID
>
> - REACT_APP_GRAPHQL_API_URI: GraphQL Server URI
>
>   > ex) [http://localhost:5000](http://localhost:5000/)

