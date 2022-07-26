import express from "express";
import AutorController from "../controlles/autoresController.js";
import autoresController from "../controlles/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutorController.listarAutores)
  .get("/autores/:id", AutorController.listarAutorPorId)
  .post("/autores", AutorController.cadastrarAutor)
  .put("/autores/:id", AutorController.atualizarAutores)
  .delete("/autores/:id", AutorController.excluirAutores)

export default router;