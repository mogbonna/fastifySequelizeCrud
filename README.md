# Fastify Sequelize CRUD API

This project is a basic CRUD API built with [Fastify](https://www.fastify.io/) and [Sequelize](https://sequelize.org/), using PostgreSQL as the database. It allows for basic CRUD operations on a `User` model.

## Project Structure

```
fastify-sequelize-crud/
├── models/
│   └── user.js            # Defines the User model for Sequelize
├── plugins/
│   └── sequelize.js       # Initializes Sequelize and connects to PostgreSQL
├── controllers/
│   └── user.js            # Contains business logic for user CRUD operations
├── routes/
│   └── user.js            # Defines routes for user CRUD endpoints
├── server.js              # Entry point of the Fastify server
├── package.json           # Project metadata and dependencies
└── .gitignore             # Files and directories to ignore in version control
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [PostgreSQL](https://www.postgresql.org/) (ensure it’s installed and running)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mogbonna/fastifySequelizeCrud.git
cd fastifySequelizeCrud
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure PostgreSQL Connection

Open `plugins/sequelize.js` and update the Sequelize connection string with your PostgreSQL credentials:

```javascript
const sequelize = new Sequelize(
  "postgres://username:password@localhost:5432/mydatabase"
);
```

If your PostgreSQL setup does not require a password, leave the password part blank, e.g., `postgres://username@localhost:5432/mydatabase`.

Alternatively, you can use environment variables for sensitive data:

2. Add a `.env` file in the root folder:

   ```plaintext
   DB_USERNAME=yourUsername
   DB_PASSWORD=yourPassword
   DB_NAME=yourDatabase
   DB_HOST=localhost
   DB_PORT=5432
   ```

3. Update `sequelize.js` to use these variables:

   ```javascript
   const sequelize = new Sequelize(
     `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
   );
   ```

### 4. Start the Server

To start the Fastify server, run:

```bash
node server.js
```

Your server should be running at [http://localhost:3000](http://localhost:3000).

## API Endpoints

Use Postman or another HTTP client to interact with the API.

- **Create User**

  - **POST** `/users`
  - **Body**: `{ "name": "John Doe", "email": "johndoe@example.com" }`

- **Get All Users**

  - **GET** `/users`

- **Get User by ID**

  - **GET** `/users/:id`

- **Update User**

  - **PUT** `/users/:id`
  - **Body**: `{ "name": "Jane Doe" }`

- **Delete User**
  - **DELETE** `/users/:id`

### Testing with Postman

1. Open Postman and set up a new request.
2. Enter the URL (e.g., `http://localhost:3000/users`) and select the appropriate HTTP method (e.g., GET, POST).
3. If required, add a JSON body under the **Body** tab for POST and PUT requests.
4. Send the request and verify the response.

## License

This project is licensed under the MIT License.
