import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Creacion del app
const app = express();
//asegura que express lea el formato json
app.use(express.json());

// Conexión a MongoDB usando mongoose
mongoose
  .connect("mongodb+srv://backendcluster.wyuvc5o.mongodb.net/", {
    dbName: "backendDB",
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
  })
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log(err);
  });

// Middlewares
app.use(cors());

import usersRouter from "./users/users.router";
app.use("/users", usersRouter);

import productsRouter from "./productos/products.router";
app.use("/products", productsRouter);

// Endpoint para 404
app.use((req, res) => {
  res.status(404).json({ message: "Not found." });
});

try {
  app.listen(3012);
  console.log("Connection stablished.");
} catch (error) {
  console.log(error);
}
