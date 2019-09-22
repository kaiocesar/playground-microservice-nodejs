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
    }
}