module.exports = {
  async createUser(req, reply) {
    const { name, email, age } = req.body;
    try {
      const user = await req.server.models.User.create({ name, email, age });
      reply.send(user);
    } catch (error) {
      reply.status(500).send(error);
    }
  },

  async getUsers(req, reply) {
    const users = await req.server.models.User.findAll();
    reply.send(users);
  },

  async getUser(req, reply) {
    const user = await req.server.models.User.findByPk(req.params.id);
    if (user) {
      reply.send(user);
    } else {
      reply.status(404).send({ message: "User not found" });
    }
  },

  async updateUser(req, reply) {
    const { name, email, age } = req.body;
    try {
      const user = await req.server.models.User.findByPk(req.params.id);
      if (user) {
        await user.update({ name, email, age });
        reply.send(user);
      } else {
        reply.status(404).send({ message: "User not found" });
      }
    } catch (error) {
      reply.status(500).send(error);
    }
  },

  async deleteUser(req, reply) {
    try {
      const user = await req.server.models.User.findByPk(req.params.id);
      if (user) {
        await user.destroy();
        reply.send({ message: "User deleted successfully" });
      } else {
        reply.status(404).send({ message: "User not found" });
      }
    } catch (error) {
      reply.status(500).send(error);
    }
  },
};
