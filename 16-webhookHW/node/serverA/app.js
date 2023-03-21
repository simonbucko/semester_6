import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import hooksRouter from "./routers/hooks.js";
import usersRouter from "./routers/users.js";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use(hooksRouter);
app.use(usersRouter);

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "WebHooks API",
    version: "1.0.0",
    description:
      "This is the documentation for the webhooks manadatory assignment",
  },
};
const options = {
  swaggerDefinition,
  apis: ["./routers/*.js"],
};
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`));
