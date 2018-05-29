export class Routes {
    private router: any;

    constructor(_router: any) {
        this.router = _router;
    }

    public listen(): void {
        this.router.get('/', (req: any, res: any) => {res.send('OK')});
    }
}