import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { handlePlaceOrder } from '../../api/cart';

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
export default function Cart({ showCart, handleCloseCart, list, auth }) {
	return (
		<Modal show={showCart} onHide={handleCloseCart} size='lg'>
			<Modal.Header closeButton>
				<Modal.Title>Cart</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{list ? list.map((p, id) => <Item key={id} {...p} />) : null}
				<Button onClick={() => handlePlaceOrder({ auth })}>
					Place Order
				</Button>
			</Modal.Body>
		</Modal>
	);
}
