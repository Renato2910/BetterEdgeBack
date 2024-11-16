const clienteService = require("../services/clienteService");

async function createCliente(req, reply) {
  try {
    const cliente = await clienteService.create(req.body);
    return reply.status(201).send(cliente);
  } catch (error) {
    return reply.status(400).send({ error: error.message });
  }
}

async function getClientes(req, reply) {
  try {
    const clientes = await clienteService.getAll();
    return reply.send(clientes);
  } catch (error) {
    return reply.status(400).send({ error: error.message });
  }
}

async function getClienteById(req, reply) {
  try {
    const cliente = await clienteService.getById(req.params.id);
    return reply.send(cliente);
  } catch (error) {
    return reply.status(400).send({ error: error.message });
  }
}

async function updateCliente(req, reply) {
  try {
    const cliente = await clienteService.update(req.params.id, req.body);
    return reply.send(cliente);
  } catch (error) {
    return reply.status(400).send({ error: error.message });
  }
}

module.exports = {
  createCliente,
  getClientes,
  getClienteById,
  updateCliente,
};
