# node-ls

A demo application using NestJS to list the content of a folder. It includes:
* a rest api
* a react single page app client
* a cli interface

## Dev setup
This project uses a monorepo with Yarn and Lerna.

To setup the project, execute the following:
```
yarn
yarn bootstrap
```

### Launching the project
#### The rest api and react application

To launch:
```
ROOT_PATH=[A-FOLDER] yarn start
```

To avoid security issues, be sure to pass a ROOT_PATH environment variable to indicate from where you want the LS
to work. If the ROOT_PATH is missing or invalid, you will get an error.

This will give you the following links:
* http://localhost:3000/api/doc : the swagger doc of the rest api
* http://localhost:3000/api : the rest api
* http://localhost:3000 : the react application

## The CLI interface

To build the CLI interface:
```
yarn
yarn bootstrap
yarn build
```

And then to launch it, from the project root:
```
node cli ls --path=[a-path]
```

## Running in production (docker)

To run the project (api and react) using docker, there is 3 images:

* the frontend
* the backend
* a reverse proxy

To launch everything, there is a docker-compose available. Just launch
```
docker-compose up -d
```

You can the open http://localhost to view the react frontend. It will serve the content of the testfolder in `docker/testfolder`. 
You can use `.` as a path in the react frontend to display the content of the root folder.