import axios from 'axios';
const config = {
	headers: { 'Content-Type': 'application/json' },
};
export async function handleLogin({ username, password }) {
	const result = await axios.post(
		'http://0.0.0.0:8080/api/login',
		{
			username,
			password,
		},
		config
	);
	return await result.data.token;
}
export async function handleSignup({ username, password }) {
	await fetch('http://0.0.0.0:8080/api/signup', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify({ username, password }),
	});
}
