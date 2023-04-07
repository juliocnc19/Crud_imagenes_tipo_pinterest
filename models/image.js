const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
	title: {type: String},
	description: {type: String},
	filename: {type: String},
	path: {type: String},
	originalname: {type: String},
	minetype: {type: String},
	size: {type: Number},
	date: {type: Date, default: Date.now()}
})

module.exports = model("Image",imageSchema);