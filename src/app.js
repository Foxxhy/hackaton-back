import express from "express";
import cors from "cors";
import { config } from "./config/config.js";
import routes from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(cors(config.cors));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", routes);

// Gestion des erreurs
app.use("*", notFound);
app.use(errorHandler);

export default app;
