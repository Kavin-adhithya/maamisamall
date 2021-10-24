import express, { Router } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import setup from './src/setup.js';
import {
	login,
	signup,
	verify,
	addToCart,
	placeOrder,
	getCart,
} from './src/index.js';

setup();
const port = 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/login', login);
app.post('/api/signup', signup);

const cart = Router();
cart.use(verify);

cart.post('/', addToCart);
cart.put('/', placeOrder);
cart.get('/', getCart);

app.use(cookieParser());
app.use('/api/cart', cart);

app.listen(port, () => console.log(`listening on port:${port}`));
