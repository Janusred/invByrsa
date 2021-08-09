import { Router } from "express";


import morgan from 'morgan';
import cors from 'cors';
import { indexControllers } from "../controllers/indexControllers";

class IndexRoutes{
 public   router : Router = Router();

 constructor(){
this.config();
 }
 config():void{
     this.router.get('/', (req, res) => res.send('Hola Janus'));
 }
} 
const indexRoutes= new IndexRoutes();
export default indexRoutes.router;