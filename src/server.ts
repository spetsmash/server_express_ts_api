import { createServer, Server } from 'http';
import * as express from 'express';
import { ROUTER } from './controllers/routes';

export class Main {
    public static readonly PORT:number = 8080;
    private app: express.Application;
    private server: Server;
    private port: string | number;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || Main.PORT;
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
        this.app.use('/', ROUTER);
    }

    public getApp(): express.Application {
        return this.app;
    }


}

