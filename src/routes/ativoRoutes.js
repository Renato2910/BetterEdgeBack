const fastify = require("fastify")();
const ativoController = require("../controllers/ativoController");

async function routes(fastify) {
  fastify.post("/ativos", ativoController.createAtivo);
  fastify.get("/ativos", ativoController.getAtivos);
  fastify.get("/ativos/:id", ativoController.getAtivoById);
  fastify.put("/ativos/:id", ativoController.updateAtivo);
  fastify.delete("/ativos/:id", ativoController.deleteAtivo);
}

module.exports = routes;
