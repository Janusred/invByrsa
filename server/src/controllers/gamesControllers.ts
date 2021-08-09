import { Request, Response } from 'express';


import pool from '../database';

class GamesController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM piz');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM piz WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "Error" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO piz set ?', [req.body]);
        res.json({ message: 'Creado!!' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE piz set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Infomacion guardada" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM piz WHERE id = ?', [id]);
        res.json({ message: "Eliminado" });
    }
}

const gamesController = new GamesController;
export default gamesController;