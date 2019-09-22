import express, { Application } from 'express';

import { Controller } from './controllers/controller';
import { MONGO_URL } from './constants/api.constants';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
    public app: Application;

    public mainController: Controller;

    constructor() {
        this.app = express();
        this.setConfig();
        this.setMongoConfig();

        this.mainController = new Controller(this.app);
    }

    private setConfig() {
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true}));
        this.app.use(cors());
    }

    private setMongoConfig() {
        mongoose.Promise = global.Promise;
        mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

}

export default new App().app;