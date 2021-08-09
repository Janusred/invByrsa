import { Router } from "express";

class GamesRoutes{
 public   router : Router = Router();

 constructor(){
this.config();
 }
 config():void{
     this.router.get('/', (req, res) => res.send('Hola Janus en el juego'));
 }
}
const gamesRoutes= new GamesRoutes();
export default gamesRoutes.router;