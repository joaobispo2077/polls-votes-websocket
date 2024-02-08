import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function getPollRoute(app: FastifyInstance) {
  app.get("/polls/:pollId", async (request, response) => {
    const getPollParams = z.object({
      pollId: z.string().uuid(),
    });
  
    const { pollId } = getPollParams.parse(request.body);
  
    const poll = await prisma.poll.findUnique({
     where: { id: pollId },
    });


  
  
    return response.send({ poll });
  });
}