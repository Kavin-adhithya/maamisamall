import jwt from 'jsonwebtoken';

export default function () {
	const SECRET = 'SECRET_TOKEN';
	return Object.freeze({
		generateToken,
		decodeToken,
	});
	function generateToken({ username }) {
		return jwt.sign({ username }, SECRET);
	}
	function decodeToken({ token }) {
		try {
			return jwt.verify(token, SECRET);
		} catch (err) {
			return { err };
		}
	}
}
