import { app } from "../app";

const PORT = 3000;

app.listen({ port: PORT})
  .then(() => {
    console.log(`Server is running at port ${PORT}`);
  });