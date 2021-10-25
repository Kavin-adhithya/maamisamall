import axios from 'axios';

export async function handleAddToCart({ name, url, price, auth }) {
	const config = {
		headers: { 'Content-Type': 'application/json', auth },
	};
	await axios.post(
		'http://0.0.0.0:8080/api/cart',
		{ name, url, price },
		config
	);
}

export async function handlePlaceOrder({ auth }) {
	const config = {
		headers: { 'Content-Type': 'application/json', auth },
	};
	await axios.put('http://0.0.0.0:8080/api/cart', config);
}

export async function handleGetCart({ auth }) {
	const config = {
		headers: { 'Content-Type': 'application/json', auth },
	};
	try {
		const result = await axios.get('http://0.0.0.0:8080/api/cart', config);
		const list = await result.data;
		return list.cart;
	} catch (err) {
		console.log(err);
		return [];
	}
}
