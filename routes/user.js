const userController = require("../controllers/user");

async function routes(fastify) {
  fastify.post("/users", userController.createUser);
  fastify.get("/users", userController.getUsers);
  fastify.get("/users/:id", userController.getUser);
  fastify.put("/users/:id", userController.updateUser);
  fastify.delete("/users/:id", userController.deleteUser);
}

module.exports = routes;
