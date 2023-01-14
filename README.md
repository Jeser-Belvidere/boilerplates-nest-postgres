## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

$ Start containers in detached / background mode

```bash
docker-compose up -d
```

$ Stop containers

```bash
docker-compose down
```

## Migrations

Migrations works only in prod mode, when type-cli.config in dist/ folder

Runs all migrations up, which are placed in migration's array at typeorm-cli.config.ts

```
npm run migrateAll
```

Rollsback migrations

```
npm run migrateRollbackAll
```
