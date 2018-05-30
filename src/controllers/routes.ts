import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {res.send('OK')});
router.get('/home', (req: Request, res: Response) => {res.send('home')});

export const ROUTER = router;