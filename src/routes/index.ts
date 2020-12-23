import { Router } from 'express'
// @ts-ignore
import productsRouter from './products.routes.ts'

const routes = Router();

routes.use('/', productsRouter);

export default routes;