const fastify = require("fastify")({ logger: true });
const sequelizePlugin = require("./plugins/sequelize");
const userRoutes = require("./routes/user");

fastify.register(sequelizePlugin);
fastify.register(userRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" }); // Pass an object with port and host
    console.log("Server is running on http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
