import express from "express";
import artPiecesController from "./artPiece.controller.js";
const Artrouter = express.Router();


// TODO: require your artPiecesController here
const ap = new artPiecesController();

// TODO: Implement your artPieces routes here
Artrouter.get('/api/artPieces', ap.getAll);
Artrouter.get('/api/artPieces/:id', ap.getByID);
Artrouter.get("/api/artPieces/:id'", ap.updateDetails );
Artrouter.get('/api/artPieces/:id' , ap.deleteDetails);


export default Artrouter;
