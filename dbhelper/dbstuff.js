const mongoose = require('mongoose');
const dbconnect=mongoose.connect('mongodb://localhost/healthcare')
	.then(() => console.log('connected to the database'))
	.catch(err => console.error('couldnt connect to the database', err));

const schema = new mongoose.Schema({
	name: String,
	health: String,
	date: {
		type: Date, default: Date.now
	},
	isPublished: Boolean 
	});
const userschema= new mongoose.Schema({
	user: String,
	password: String,
	name: String
});
const Health = mongoose.model('health', schema);//function call
const user = mongoose.model('user',userschema);
module.exports={
Health,
dbconnect,
user
};