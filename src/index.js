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

import usersRoutes from "./users/users.routes";
app.use("/users", usersRoutes);

// Endpoint para 404
app.use((req, res) => {
  res.status(404).json({ message: "Not found." });
});

try {
  app.listen(3012);
  console.log("Connection stablished");
} catch (error) {
  console.log(error);
}
