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

async function deleteAtivo(req, reply) {
  try {
    console.log(`Tentando deletar o ativo com id: ${req.params.id}`);

    // Verifica se o ativo existe antes de tentar excluir
    const ativo = await ativoService.getById(req.params.id); // Use o serviço para buscar o ativo

    if (!ativo) {
      console.log(`Ativo com id ${req.params.id} não encontrado.`);
      return reply.status(404).send({ error: "Ativo não encontrado para deleção" });
    }

    // Deleta o ativo
    await ativoService.deleteAtivo(req.params.id); // Chama o serviço para deletar o ativo

    console.log(`Ativo com id ${req.params.id} deletado com sucesso.`);
    return reply.status(204).send(); // Retorna status 204 (No Content) indicando sucesso na deleção
  } catch (error) {
    console.error(`Erro ao deletar o ativo com id ${req.params.id}: ${error.message}`);
    return reply.status(500).send({
      error: "Erro ao deletar o ativo. Tente novamente mais tarde.",
    });
  }
}

module.exports = {
  createAtivo,
  getAtivos,
  getAtivoById,
  updateAtivo,
  deleteAtivo,
};