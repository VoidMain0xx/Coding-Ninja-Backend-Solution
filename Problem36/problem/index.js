import express from "express";
import Artrouter from "./src/features/artPiece/artPiece.routes.js";
import bodyParser from "body-parser";
const app = express();

// TODO: require your artPieceRoutes here
app.use(bodyParser.json())
app.use(express.json());

app.use('/', Artrouter)

// TODO: use your artPieceRoutes with a proper endpoint

export default app;
