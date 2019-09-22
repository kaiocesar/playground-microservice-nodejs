import { Application } from 'express';
import { ApiService } from '../services/api';

export class Controller {
    private apiService: ApiService;

    constructor(private app: Application) {
        this.apiService = new ApiService();
        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.apiService.welcomeMessage);

        this.app.route('/pokemons').get(this.apiService.getAllPokemon);

        this.app.route("/pokemon").post(this.apiService.addNewPokemon);

        this.app.route("/pokemon/:id").delete(this.apiService.deletePokemon);

        this.app.route("/pokemon/:id").put(this.apiService.updatePokemon);
    }
}