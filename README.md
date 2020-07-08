![](Documentation/MusicMaster-banner.png)
# :notes:Music Master:musical_note:

This is the back end of the Music Master game. It provides an API with song snippets from the top chart. You can find list of endpoints further in this document. 

#### :sparkles:Check out the [frontend](https://github.com/mitraws/MusicMaster-ReactNative-Client).:sparkles:

## Table of contents:

- **[Setup and Scripts](#setup-and-scripts)**
- **[Technologies used](#technologies-used)**
- **[Sample requests with httpie](#sample-requests-with-httpie)**
- **[Endpoints](#endpoints)**

## Setup and Scripts
- Clone the repository
- Go to the project folder
- Install npm modules
- Run the following command `docker run -e POSTGRES_PASSWORD=secret -p 5432:5432 --name MusicMaster -d postgres`
- Launch the project

In the project directory, you can run:

    "start": "node .",
    "dev": "env DELAY=1000 npx nodemon .",
    "initdev": "npm run createDB && npm run migrate && npm run seed",
    "migrate": "npx sequelize-cli db:migrate",
    "seed": "npx sequelize-cli db:seed:all",
    "createDB": "npx sequelize-cli db:create",
    "dropDB": "npx sequelize-cli db:drop",
    "resetDB": "npm run dropDB && npm run initdev",
    "test": "echo \"Error: no test specified\" && exit 1"

## Technologies used
- Node.js
- Routing controllers
- Sequelize
- Express
- PostgreSQL
- Docker

## Sample HTTPIE requests

### POST /

```bash
HTTP post :4000/game players:='[]'
```

```bash
HTTP post :4000/game players:='[""]'
```
```bash
HTTP post :4000/game players:='["mit","mat"]'
```

## Endpoints

| Method | Path                       | Purpose                             | required parameters   | auth |
| ------ | -------------------------- | ----------------------------------- | --------------------- | ---- |
| GET    | '/'                        | Test if your server is running      | none                  | no   |
| POST   | '/echo'                    | Test POST requests                  | none                  | no   |
| POST   | '/game'                    | Test adding game and players        | name                  | no   |


