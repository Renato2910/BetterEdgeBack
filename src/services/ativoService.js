const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function create(data) {
  return await prisma.ativo.create({
    data: {
      nome: data.nome,
      valorAtual: data.valorAtual, 
      clienteId: data.clienteId, 
    },
  });
}

async function getAll() {
  return await prisma.ativo.findMany({
    include: {
      cliente: true, 
    },
  });
}

async function getById(id) {
  return await prisma.ativo.findUnique({
    where: {
      id: parseInt(id), 
    },
    include: {
      cliente: true,
    },
  });
}

async function update(id, data) {
  return await prisma.ativo.update({
    where: {
      id: parseInt(id), 
    },
    data: {
      nome: data.nome,
      valorAtual: data.valorAtual, 
      clienteId: data.clienteId,
    },
  });
}

module.exports = {
  create,
  getAll,
  getById,
  update,
};
