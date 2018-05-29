import { createServer, Server } from 'http';
import * as express from 'express';
import { Routes } from './controllers/routes';

export class Main {
    public static readonly PORT:number = 8080;
    private app: express.Application;
    private server: Server;
    private port: string | number;
    private routes: Routes;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.listen();
        // this.routes = new Routes(this.app);
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
        // this.routes.listen();
    }

    public getApp(): express.Application {
        return this.app;
    }
}
