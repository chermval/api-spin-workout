# API SPIN WORKOUT
NestJS api rest for indoor bike workout

## Install

### Requisites
- Node
- Postgres

`npm i`

## Run the app

Copy or rename ".env.example" file to ".env" and modify the values in file. 

### Local/Dev
`npm run start`

#### Watch mode
`npm run start:dev`

### Production
`npm run start:prod`

## Run the test
`npm run test`

### e2e tests
`npm run test:e2e`

### test coverage
`npm run test:cov`

## Usage

| ACTION | METHOD  | URI               | EXAMPLE               | 
|--------|---------|-------------------|-----------------------|
| Validate health of api | `GET`   | `/api/v1/healthcheck` |  http://localhost:3000/api/v1/healthcheck |
| Get all workouts | `GET`   | `/api/v1/workouts` |  http://localhost:3000/api/v1/workouts |
| Get workout by Id | `GET`   | `/api/v1/workouts/{id}` |  http://localhost:3000/api/v1/workouts/{id} [1] |
| Delete workout by Id | `DELETE`   | `/api/v1/workouts/{id}` |  http://localhost:3000/api/v1/workouts/{id} [1] |
| Update workout by Id | `PUT`   | `/api/v1/workouts/{id}` |  http://localhost:3000/api/v1/workouts/{id} [1] |
