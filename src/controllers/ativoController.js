const ativoService = require("../services/ativoService");

async function createAtivo(req, reply) {
  try {
    const ativo = await ativoService.create(req.body); 
    return reply.status(201).send(ativo);
  } catch (error) {
    return reply.status(400).send({ error: error.message });
  }
}

async function getAtivos(req, reply) {
  try {
    const ativos = await ativoService.getAll();
    return reply.send(ativos); 
  } catch (error) {
    console.error(error); 
    return reply
      .status(500)
      .send({ error: "Erro ao buscar os ativos. Tente novamente mais tarde." });
  }
}

async function getAtivoById(req, reply) {
  try {
    const ativo = await ativoService.getById(req.params.id);

    if (!ativo) {
      return reply.status(404).send({ error: "Ativo não encontrado" });
    }

    return reply.send(ativo); 
  } catch (error) {
    console.error(error); 
    return reply
      .status(500)
      .send({ error: "Erro ao buscar o ativo. Tente novamente mais tarde." });
  }
}

async function updateAtivo(req, reply) {
  try {
    if (!req.body.nome || !req.body.valorAtual || !req.body.clienteId) {
      return reply
        .status(400)
        .send({ error: "Nome, valorAtual e clienteId são obrigatórios!" });
    }

    const ativo = await ativoService.update(req.params.id, req.body);

    if (!ativo) {
      return reply
        .status(404)
        .send({ error: "Ativo não encontrado para atualização" });
    }

    return reply.send(ativo); 
  } catch (error) {
    console.error(error); 
    return reply.status(500).send({
      error: "Erro ao atualizar o ativo. Tente novamente mais tarde.",
    });
  }
}

module.exports = {
  createAtivo,
  getAtivos,
  getAtivoById,
  updateAtivo,
};
