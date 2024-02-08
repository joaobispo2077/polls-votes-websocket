import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from "zod";
const app = fastify();

const prisma = new PrismaClient();

app.post("/polls", async (request, response) => {
  const createPollBody = z.object({
    title: z.string(),
  });

  const { title } = createPollBody.parse(request.body);

  const poll = await prisma.poll.create({
    data: {
      title,
    },
  });


  return response.status(201).send({ pollId: poll.id });
});

app.get("/polls", () => {
  return {
    polls: [
      { id: 1, name: "Best programming language" },
      { id: 2, name: "Best programming language" },
      { id: 3, name: "Best programming language" },
    ],
  };
});

export { app };