import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
	name: String,
	url: String,
	price: Number,
	count: { type: Number, default: 1, min: 1 },
});

const userSchema = new Schema({
	username: String,
	password: String,
	cart: [productSchema],
	createdAt: { type: Date, default: Date.now },
});

export const User = model('user', userSchema);
