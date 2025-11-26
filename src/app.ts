import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import { router as booksRouter } from "./routes/books.routes";
import { router as membersRouter } from "./routes/members.routes";
import { router as borrowRouter } from "./routes/borrow.routes";

import notificationRoutes from "./routes/notifications.routes";


dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// ⭐ ADD SWAGGER HERE ⭐
const swaggerDocument = YAML.load("./src/docs/swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ROUTES
app.use("/api/v1/books", booksRouter);
app.use("/api/v1/members", membersRouter);
app.use("/api/v1/borrow", borrowRouter);
app.use("/api/v1/notify", notificationRoutes);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

export default app;
