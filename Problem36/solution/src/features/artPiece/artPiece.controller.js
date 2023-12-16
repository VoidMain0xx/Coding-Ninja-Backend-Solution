// TODO: require your ArtPiece model here
import ArtPiece from "./artPiece.model.js";

// TODO: Implement your artPieces controller functions here
export default class artPiecesController {

    getAll(req, res) {
        const art = ArtPiece.getAll();
        res.send(product)
    }


    getByID(req, res) {
        const id = req.params.id;
        const artPiece = ArtPiece.get(id);
        if (!artPiece) {
            res.status(404).send('product not found');
        } else {
            res.status(200).send(artPiece)
        }

    }

    updateDetails(req, res) {
        const id = req.params.id;
        const artfound = ArtPiece.update(id)
        if(artfound){
           res.status(201).send(artfound);
        }else{
            res.status(401).send('product not found') 
        }

    }

    deleteDetails(req, res) {
        const id = req.body.id;
        const artFound = ArtPiece.remove(id);
        if(artFound){
            res.status(201).send("deleted");
         }else{
             res.status(401).send('product not found') 
         }

    }
}
