# CSC-417 Project 1

## Starting Locally

### Without Docker

1. `npm install`
2. `npm start`

### With Docker

1. `docker build -t project-1 .`
2. `docker run --rm -p 3000:3000 -v $(pwd):/service -v /service/node_modules project-1`
