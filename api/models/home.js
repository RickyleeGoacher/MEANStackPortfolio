const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

mongoose.connection.once('open', function(){
	console.log('Connection has been made!');
}).on('error', function(error){
	console.log('Error is: ', error);
});

const Schema = mongoose.Schema;

// Create home schema

const HomeSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
    image: String
});

module.exports = mongoose.model('Home', HomeSchema); // Export schema