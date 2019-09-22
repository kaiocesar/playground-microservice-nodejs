import { Request, Response } from "express";
import { Pokemon } from '../models/pokemon.models';

export class ApiService {
    public welcomeMessage(req: Request, res: Response) {
        return res.status(200).send("Welcome to API rest by Kaio");
    }
}