import React from 'react';
import { Modal, Button } from 'react-bootstrap';

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
		<div
			style={{
				display: 'flex',
			}}
		>
			<img
				src={url}
				style={{ width: '70px', height: '70px' }}
				alt='img'
			/>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: '10px',
				}}
			>
				<h5> {name}</h5>
				<h5> MRP:₹{price}</h5>
			</div>
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
					<Item key={id} {...p} />
				))}
				<Button> Place Order</Button>
			</Modal.Body>
		</Modal>
	);
}
