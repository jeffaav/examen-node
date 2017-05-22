import { DB } from './helpers/mongo';
import * as express from "express";

const app: express.Express = express();
const db = new DB();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('./public/index.html');
})

// programar aquí



export default app