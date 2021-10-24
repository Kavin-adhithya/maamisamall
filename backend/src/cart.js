import Mongoose from 'mongoose';
import { User } from './model.js';

export default function () {
	return Object.freeze({
		placeOrder,
		addToCart,
		getCart,
	});

	async function placeOrder(req, res) {
		const { username } = req.headers;
		try {
			await User.updateOne({ username }, { cart: [] });
		} catch (err) {
			if (err instanceof Mongoose.Error.DocumentNotFoundError) {
				res.status(404);
				res.json({ msg: 'UserName Not found' });
			} else {
				res.status(500);
				res.json({ msg: 'Internal Server Error' });
			}
			return;
		}
		res.status(200);
		res.json({ msg: 'Success' });
	}
	async function addToCart(req, res) {
		const { username } = req.headers;
		const { name, url, price } = req.body;
		try {
			await User.updateOne(
				{ username },
				{ $push: { cart: [{ name, url, price }] } }
			);
		} catch (err) {
			if (err instanceof Mongoose.Error.DocumentNotFoundError) {
				res.status(404);
				res.json({ msg: 'UserName Not found' });
			} else {
				res.status(500);
				res.json({ msg: 'Internal Server Error' });
			}
			return;
		}
		res.status(200);
		res.json({ msg: 'Success' });
	}
	async function getCart(req, res) {
		const { username } = req.headers;

		try {
			const { cart } = await User.findOne({ username });
			res.status(200);
			res.json({ msg: 'Success', cart });
		} catch (err) {
			if (err instanceof Mongoose.Error.DocumentNotFoundError) {
				res.status(404);
				res.json({ msg: 'UserName Not found' });
			} else {
				res.status(500);
				res.json({ msg: 'Internal Server Error' });
			}
			return;
		}
	}
}
