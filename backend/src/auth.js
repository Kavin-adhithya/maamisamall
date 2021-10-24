import { User } from './model.js';

export default function ({ generateToken, decodeToken }) {
	return Object.freeze({
		login,
		signup,
		verify,
	});
	async function login(req, res) {
		const { username, password } = req.body;
		try {
			const user = await User.findOne({ username, password }).exec();
			if (!user) {
				res.status(400);
				res.json({ msg: 'username password not match' });
			}
		} catch (err) {
			res.status(501);
			res.json({ msg: 'Internal Server Error' });
		}
		const token = generateToken({ username });
		res.status(200);
		res.cookie('auth', token);
		res.json({ msg: 'Successfull' });
	}

	async function signup(req, res) {
		const { username, password } = req.body;
		const user = {
			username,
			password,
		};
		try {
			User.create(user);
		} catch (err) {
			res.status(501);
			res.json({ msg: 'Internal Server Error' });
		}
		res.status(200);
		res.json({ msg: 'User Created' });
	}

	async function verify(req, res, next) {
		const { auth: token } = req.cookies;
		const { username, err } = decodeToken({ token });
		if (err) {
			res.status(400);
			res.json({ msg: err });
			return;
		}
		req.headers['username'] = username;
		next();
	}
}
