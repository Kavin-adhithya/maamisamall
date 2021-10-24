import auth from './auth.js';
import token from './token.js';
import cart from './cart.js';

const { generateToken, decodeToken } = token();

export const { login, signup, verify } = auth({ generateToken, decodeToken });
export const { placeOrder, addToCart, getCart } = cart();
