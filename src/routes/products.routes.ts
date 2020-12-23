import { Router} from 'express';
import connection from "../database/connection";

const productsRouter = Router();

productsRouter.get('/', async (req, res) => {
    const products = await connection('products').select('*');
    return res.json(products);
})

export default productsRouter;