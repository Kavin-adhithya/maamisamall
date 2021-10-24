import mongoose from 'mongoose';

export default async function () {
	console.log('connecting to mongoDB...');
	await mongoose.connect(
		'mongodb+srv://kabiAdmin:w3W4FdJz8AKEP6p@cluster0.sbiiz.mongodb.net/db?retryWrites=true&w=majority',
		function (error) {
			console.log(error);
		}
	);
}
