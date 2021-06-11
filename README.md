# Rest Api Node.js, Express.js and MySQL

REST API Development with Node.js, Express.js, and MYSQL to customer management.

## Features

- Routing with Express.js
- Sequelize ORM database
- Basic Authentication (Register/Login with hashed password)
- JWT Authentication Tokens
- Included CORS.

## How to install

### Clone the project from github

Open a terminal and type:

```sh
$ git clone https://github.com/neduardoaguirre/node-mysql-rest-api.git
```

### Install npm dependencies after installing

```sh
$ cd node-mysql-rest-api
$ npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```sh
    $ cp .env.example .env
    ```
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment.

    ```sh
    PORT=yourPort
    JWT_SECRET=yourSecret

    DB_PORT=yourDatabasePort
    DB_HOST=yourDatabaseHost
    DB_USER=yourDatabaseUser
    DB_PASS=yourDatabasePassword
    DB_NAME=yourDatabaseName
    ```

## How to run

### Running API server locally

```sh
$ npm run dev
```

You will know server is running by checking the output of the command `npm run dev`

```sh
The server is running on port 4000
Executing (default): SELECT 1+1 AS result
Connection has been established successfully.
Executing (default): CREATE TABLE IF NOT EXISTS `users` (`id` INTEGER auto_increment , `name` VARCHAR(255), `email` VARCHAR(255) UNIQUE, `password` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `users`
Executing (default): CREATE TABLE IF NOT EXISTS `customers` (`id` INTEGER auto_increment , `firstName` VARCHAR(255), `lastName` VARCHAR(255), `email` VARCHAR(255) UNIQUE, `document` VARCHAR(255) UNIQUE, `address` VARCHAR(255), `createdBy` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `customers`
All models were synchronized successfully.
```

Press CTRL + C to stop the process.

### Routes

- http://localhost:4000
  - /api/users
  - /api/auth
  - /api/customers

#### Requests with Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API

- User registration:

  - URL: http://localhost:4000/api/users
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "name": "usertest", "email":"usertest@usertest.com", "password": "Pass1234"}`
  - Body Response: `{ "token": "token_value" }`

- User login:

  - URL: http://localhost:4000/api/auth
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "email":"usertest@usertest.com", "password": "Pass1234"}`
  - Body Response: `{ "token": "token_value" }`

- Get logged user:

  - URL: http://localhost:4000/api/auth
  - Method: GET
  - Headers: `KEY: x-auth-token` - `VALUE: token_value`
  - Body Response: `{"user": {"id": "id-user", "name": "usertest", "email": "usertest@usertest.com"}}`

- Create a customer:

  - URL: http://localhost:4000/api/customers
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "firstName": "value", "lastName": "value","email": "value", "document": "value", "address": "value"}`
  - Headers: `KEY: x-auth-token` - `VALUE: token_value`
  - Body Response: `{"id": "id-customer", "firstName": "value", "lastName": "value", "email": "value", "document": "value", "address": "value", "createdBy": "id-user", "createdAt": "created_datetime","updatedAt": "updated_datetime"}`

- Get customers:

  - URL: http://localhost:4000/api/customers
  - Method: GET
  - Headers: `KEY: x-auth-token` - `VALUE: token_value`
  - Body Response: `{"customers": [{"id": "id-customer", "firstName": "value", "lastName": "value", "email": "value", "document": "value", "address": "value", "createdBy": "id-user", "createdAt": "created_datetime","updatedAt": "updated_datetime"},{...other customer},{...other customer}]}`

- Get a customer:

  - URL: http://localhost:4000/api/customers/id-customer
  - Method: GET
  - Headers: `KEY: x-auth-token` - `VALUE: token_value`
  - Body Response: `{"customer": {"id": "id-customer", "firstName": "value", "lastName": "value", "email": "value", "document": "value", "address": "value", "createdBy": "id-user", "createdAt": "created_datetime","updatedAt": "updated_datetime"}}`

- Edit a customer:

  - URL: http://localhost:4000/api/customers/id-customer
  - Method: PUT
  - Body: raw + JSON (application/json)
  - Body Content: `{ "firstName": "new-value", "lastName": "new-value","email": "new-value", "document": "new-value", "address": "new-value"}`
  - Headers: `KEY: x-auth-token` - `VALUE: token_value`
  - Body Response: `{"customer": {"id": "id-customer", "firstName": "value", "lastName": "value", "email": "value", "document": "value", "address": "value", "createdBy": "id-user", "createdAt": "created_datetime","updatedAt": "updated_datetime"}}`

- Delete a customer:
  - URL: http://localhost:4000/api/customers/id-customer
  - Method: DELETE
  - Headers: `KEY: x-auth-token` - `VALUE: token_value`
  - Body Response: `{"msg": "Customer deleted"}`
