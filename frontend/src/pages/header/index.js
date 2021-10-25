import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { BiCart } from 'react-icons/bi';
import './header.css';
import { Form, FormControl } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';
import Cart from './cart';
import { handleLogin, handleSignup } from '../../api/auth.js';
import { handleGetCart } from '../../api/cart';
function Header({ auth, setAuth }) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [showCart, setShowCart] = useState(false);
	const handleCloseCart = () => setShowCart(false);
	const handleShowCart = () => setShowCart(true);

	const [login, setLogin] = useState(true);
	const [list, setList] = useState(null);
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	return (
		<div>
			<Modal show={show} onHide={handleClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>{login ? 'LOG IN' : 'SIGN UP'}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#e6e3e3',
						}}
					>
						<img
							alt='icon'
							src='login.png'
							style={{ height: '30%', width: '40%' }}
						/>

						<form
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<h2
								style={{
									padding: 5,
									margin: 5,
									top: 0,
									flexDirection: 'column',
								}}
							>
								{login ? 'LOG IN' : 'SIGN UP'}
							</h2>
							<input
								type='text'
								placeholder='UserName'
								style={{ padding: 2, margin: 5 }}
								onChange={(event) =>
									setUsername(event.target.value)
								}
							></input>
							<input
								type='password'
								placeholder='Password'
								style={{ padding: 2, margin: 5 }}
								onChange={(event) =>
									setPassword(event.target.value)
								}
							></input>
							{!login && (
								<>
									<input
										type='email'
										placeholder='example@email.com'
										style={{ padding: 2, margin: 5 }}
									></input>
									<input
										type='phoneNumber'
										placeholder='PhoneNumber'
										style={{ padding: 2, margin: 5 }}
									></input>
								</>
							)}
							<div>
								<Button
									style={{ padding: '5px', margin: '5px' }}
									variant='primary'
									onClick={async () => {
										if (login) {
											const token = await handleLogin({
												username,
												password,
											});
											setAuth(token);
										} else {
											handleSignup({
												username,
												password,
											});
										}
										handleClose();
									}}
								>
									submit
								</Button>
								<Button
									variant='success'
									onClick={() => setLogin(!login)}
								>
									{' '}
									{login ? 'SignUp' : 'Login'}{' '}
								</Button>
							</div>
						</form>
					</div>
				</Modal.Body>
			</Modal>
			<Cart
				showCart={showCart}
				token={auth}
				list={list}
				handleShowCart={handleShowCart}
				handleCloseCart={handleCloseCart}
			/>
			<div style={{ backgroundColor: 'white' }}>
				<nav className='navbar navbar-expand-lg navbar-light container'>
					<img
						className='navbar-brand'
						src='logo.png'
						style={{ height: 80, width: 80 }}
					></img>
					<a className='navbar-brand' href='/'>
						Maamisamall
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div
						className='collapse navbar-collapse'
						id='navbarSupportedContent'
						style={{ justifyContent: 'space-between' }}
					>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									<div className='header_location'>
										<FaMapMarkerAlt className='location_icon' />
										<div style={{ marginLeft: 5 }}>
											<p className='location_city'>
												Chennai
											</p>
											<h5 className='location_place'>
												Vandalur
											</h5>
										</div>
									</div>
								</a>
							</li>
						</ul>
						<Form className='d-flex'>
							<FormControl
								type='search'
								placeholder='Search for the delicious food'
								className='me-2'
								aria-label='Search'
							/>
							<img
								src='search.svg'
								alt='search'
								style={{ position: 'relative', left: -35 }}
							></img>
						</Form>
						<div>
							<ul className='navbar-nav mr-auto'>
								<li className='nav-item'>
									<div
										className='nav-link header_location'
										href='/'
										onClick={handleShow}
									>
										<FaRegUser
											style={{
												fontSize: 18,
												color: 'black',
											}}
										/>
										<p className='header_login'>Login</p>
									</div>
								</li>
								<li className='nav-item'>
									<div
										className='nav-link header_location'
										onClick={async () => {
											const result = await handleGetCart({
												auth,
											});
											console.log(result);
											setList(result);
											handleShowCart();
										}}
									>
										<BiCart
											style={{
												fontSize: 24,
												color: 'black',
											}}
										/>
										<p className='header_cart'>Cart</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Header;
