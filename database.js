const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mypro_img",{
	useNewUrlParser: true
})
	.then(db => console.log("conexion satisfactoria"))
	.catch(err => console.error(err))