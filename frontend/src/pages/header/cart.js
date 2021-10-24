import React from 'react';
import { Modal } from 'react-bootstrap';

const list = [
	{
		name: 'Chicken Curry Cut(small Pcs)',
		url: 'item1.jpeg',
		price: 165,
	},
	{
		name: 'Seer (Vanjaram) Medium - Thin Slices',
		url: 'item2.jpeg',
		price: 429,
	},
	{
		name: 'Lean Goat Curry Cut',
		url: 'item3.jpeg',
		price: 585,
	},
	{
		name: 'Chicken Breast - Boneless',
		url: 'item4.jpeg',
		price: 279,
	},
	{
		name: 'Chicken Biryani Cut',
		url: 'item5.jpeg',
		price: 429,
	},
	{
		name: 'Goat Shoulder Curry Cut',
		url: 'item6.jpeg',
		price: 653,
	},
];
function Item({ name, url, price }) {
	return (
		<div>
			{name}
			<img src={url} width={50} height={50} alt='img' />
			{price}
		</div>
	);
}
export default function Cart({ showCart, handleCloseCart, handleShowCart }) {
	return (
		<Modal show={showCart} onHide={handleCloseCart} size='lg'>
			<Modal.Header closeButton>
				<Modal.Title>Cart</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{list.map((p, id) => (
					<Item key={id} {...id} />
				))}
			</Modal.Body>
		</Modal>
	);
}
