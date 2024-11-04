const fp = require("fastify-plugin");
const Sequelize = require("sequelize");
require("dotenv").config();

async function sequelizePlugin(fastify, options) {
  const sequelize = new Sequelize(
    `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  );

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  // Load and define models
  const User = require("../models/user")(sequelize); // <-- Add this line
  fastify.decorate("models", { User }); // <-- And this line

  // Sync models with the database
  await sequelize.sync(); // This line will create the Users table if it doesn’t exist

  // Decorate fastify with sequelize instance for querying
  fastify.decorate("sequelize", sequelize);
}

module.exports = fp(sequelizePlugin);
