
const create = require('../function/createinput.js');
const find = require('../function/getuser.js');
const fs = require("fs");
const path = require('path');
//export  calls
const home=(req,res)=>{
  //res.sendFile(path.join(__dirname + '/home.ejs'));
};
const healthcare=(req, res) => {
	const Validate = {
		name: Joi.string().min(3).required()

	};
	const ress = Joi.validate(req.body, Validate);
	if (ress.error) {
		res.status(400).send(result.error.details[0].message);
		return;
	}

};
const adduser=(req, res) => {
	const n = req.params.name;
	const s = req.params.status;
	res.send(n);
	create.fn(n,s);
};
const user=(req, res) => {
	const name = req.params.name;
	const check=find.ghd(name,res);
};
module.exports={
	healthcare,
	home,
	adduser,
	user
};