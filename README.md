# node-ls

A demo application using NestJS to list the content of a folder. It includes:
* a rest api
* a react single page app client
* a cli interface

Note: **THIS IS HIGHLY UNSECURE AS YOU ARE ABLE TO LIST THE CONTENT OF ANY FOLDER ON THE SERVER.**
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
npm run start:api:prod
```

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
