# Apollo-Server-Standalone-Boiler
Apollo Server Standalone Boiler (Apollo-Server V2)

Boilerplate for Apollo Server Standalone without many references and no decent Starter or Boilerplate. Made for beginners like me.

## Feature

- GraphQL Structure structure designed by me
- Authentication using context
- JWT Token creation and issuance
- MongoDB integration using DataSource (ODM - Mongoose)
- Request Rest API using DataSource
- Support for file upload using graphql-upload
  - Use S3 for file upload

## Require

Node version : V12.22.1

## Install

1. Install Project node-modules

```
yarn
```

> use `yarn` for yarn.lock

1. The environment setting (.env file) must be entered as follows.

```
STAGE=<YOUR_STAGE>
MONGO_ENDPOINT=<YOUR_MONGODB_DATABASE_URL>

JWT_TOKEN_SECRET=<YOUR_JWT_TOKEN_SECRET>
JWT_TOKEN_EXPIRES_IN=1d

GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>

KAKAO_REST_API_KEY=<YOUR_KAKAO_REST_API_KEY>

AWS_ACCESS_KEY=<YOUR_AWS_ACCESS_KEY>
AWS_SECRET_ACCESS_KEY=<YOUR_SECRET_ACCESS_KEY>
AWS_S3_REGION=<YOUR_S3_REGION>
AWS_S3_IMAGE_BUCKET_NAME=<YOUR_S3_BUCKET_NAME>
```

> **Guide**
>
> - STAGE: Server Stage Settings
>
>   > `development` OR `production`
>
> - MONGO_ENDPOINT: MongoDB Cloud Database URL
>
>   - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
>
> - JWT_TOKEN_SECRET: Key value required to create JWT Token
>
> - GOOGLE_CLIENT_ID: OAuth 2.0 Client IDs for [Google APIs](https://console.cloud.google.com/apis/credentials?folder=&hl=ko&organizationId=&project=memona)
>
> - KAKAO_REST_API_KEY: KAKAO REST API KEY
>
>   - [KAKAO Developers](https://developers.kakao.com/)
>
> - AWS_ACCESS_KEY: AWS ACCESS KEY
>
> - AWS_SECRET_ACCESS_KEY: AWS SECRET ACCESS KEY
>
> - AWS_S3_REGION: AWS S3 area code
>
>   > ex) ap-northeast-2
>
> - AWS_S3_IMAGE_BUCKET_NAME: S3 Bucket name

