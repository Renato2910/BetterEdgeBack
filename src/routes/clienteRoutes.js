const clienteController = require("../controllers/clienteController");

async function clienteRoutes(fastify, options) {
  fastify.post("/clientes", clienteController.createCliente);
  fastify.get("/clientes", clienteController.getClientes);
  fastify.get("/clientes/:id", clienteController.getClienteById);
  fastify.put("/clientes/:id", clienteController.updateCliente);
}

module.exports = clienteRoutes;
