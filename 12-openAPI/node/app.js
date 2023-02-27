import express from "express";
import usersRouter from "./routers/users.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();

app.use(express.json());

app.use(usersRouter);

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Example api",
    version: "1.0.0",
    description: "Simple API",
  },
};
const options = {
  swaggerDefinition,
  apis: ["./routers/*.js"],
};
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.listen(8080, () => console.log("I am workiin"));
