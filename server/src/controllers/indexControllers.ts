
import {Request, Response} from 'express';
 
class IndexControllers {
     public index (req: Request, res: Response){
         res.send('hola janus')
     }
 }

 export const indexControllers = new IndexControllers();
 