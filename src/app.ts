import fastify from "fastify";
import { prisma } from "./lib/prisma";
import { createPollRoute } from "./routes/create-poll";
import { getPollRoute } from "./routes/get-poll";

const app = fastify();

app.register(createPollRoute);
app.register(getPollRoute);

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