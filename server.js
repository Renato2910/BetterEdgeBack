const fastify = require("fastify")();
const fastifyCors = require("@fastify/cors");
const clienteRoutes = require("./src/routes/clienteRoutes");
const ativoRoutes = require("./src/routes/ativoRoutes");

fastify.register(fastifyCors);

fastify.register(clienteRoutes);
fastify.register(ativoRoutes);

fastify.get("/", async (request, reply) => {
  return { message: "Hello World!" };
});

const PORT = process.env.PORT || 3000;

fastify.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando na URL: ${address}`);
});
