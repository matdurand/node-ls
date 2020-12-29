# node-ls

A demo application using NestJS to list the content of a folder. It includes:
* a rest api
* a react single page app client
* a cli interface

## Launching the project
### The rest api and react application

To launch in development mode:
```
npm ci
npm run start:api
```

To launch in production mode:
```
npm ci
npm run build
ROOT_PATH=[A-FOLDER] npm run start:api:prod
```

To avoid security issues, be sure to pass a ROOT_PATH environment variable to indicate from where you want the LS
to work. If the ROOT_PATH is missing or invalid, you will get an error.

This will give you the following links:
* http://localhost:3000/api/doc : the swagger doc of the rest api
* http://localhost:3000/api : the rest api
* http://localhost:3000 : the react application

### The CLI interface

To launch the CLI interface:
```
npm ci
npm run build
node cli ls --path=[a-path]
```
