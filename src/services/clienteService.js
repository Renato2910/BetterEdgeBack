const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function create(data) {
  return await prisma.cliente.create({
    data: {
      nome: data.nome,
      email: data.email,
      status: data.status,
    },
  });
}

async function getAll() {
  return await prisma.cliente.findMany();
}

async function getById(id) {
  return await prisma.cliente.findUnique({
    where: { id: Number(id) },
  });
}

async function update(id, data) {
  return await prisma.cliente.update({
    where: { id: Number(id) },
    data: {
      nome: data.nome,
      email: data.email,
      status: data.status,
    },
  });
}

module.exports = {
  create,
  getAll,
  getById,
  update,
};
