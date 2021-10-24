import React from 'react';
import { Button } from 'react-bootstrap';
import './items.css';

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
		<div className='item'>
			<img src={url} alt='item' />
			<h5>{name}</h5>
			<div
				style={{
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'space-between',
					alignItems: 'baseline',
					width: '100%',
					color: 'red',
					fontWeight: 'bold',
				}}
			>
				<p>MRP:₹{price}</p>
				<Button variant='danger'> Add to cart </Button>
			</div>
		</div>
	);
}

export default function Items() {
	return (
		<div className='con'>
			<div className='box'>
				{list.map((p, id) => (
					<Item key={id} {...p} />
				))}
			</div>
		</div>
	);
}
