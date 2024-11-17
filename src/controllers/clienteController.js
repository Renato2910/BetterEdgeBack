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

// Função para deletar um cliente
async function deleteCliente(req, reply) {
  try {
    const cliente = await clienteService.deleteCliente(req.params.id);
    if (!cliente) {
      return reply.status(404).send({ error: "Cliente não encontrado" });
    }
    return reply.status(200).send({ message: "Cliente deletado com sucesso" });
  } catch (error) {
    return reply.status(400).send({ error: error.message });
  }
}

module.exports = {
  createCliente,
  getClientes,
  getClienteById,
  updateCliente,
  deleteCliente,  // Função de exclusão adicionada
};
