export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  // TODO: Implement your ArtPiece model methods here
  static getAll() {
    return ArtPiece;
  }

  static add(id , tittle , artist , year , imageUrl){
    const newArt = ArtPiece(artPieces.length + 1 , tittle , artist , year , imageUrl)
    return newArt;
  }

  static get(id) {
    let result = artPieces.find((p) => p.id == id);
    return result;
  }

  static update(id){
    let result = artPieces.findIndex((p) => p.id == id);
    return result;
  }

  static remove(id){
    const index = artPieces.findIndex((p) => p.id == id );
    artPieces.splice(index , 1); 
  }
  
  
}

var artPieces = [
  new ArtPiece(1, 'Songs', 'leo', 1785, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Leo_symbol_%28bold%29.svg/800px-Leo_symbol_%28bold%29.svg.png')
];