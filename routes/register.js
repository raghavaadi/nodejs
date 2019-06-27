const express = require('express');
const router = express.Router();
const db=require('../dbhelper/dbstuff.js');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

async function createuser(user1,password1,name1)
{
	const register= new  db.user({
		user:user1,
		password: password1,
		name:name1
	}); 
	const result= await register.save();
	console.log(result);
};

router.get('/',function(req,res,next){
	res.render('register',{
		title :'express',
		name : 'Raghav'
	});
});
router.post('/', urlencodedParser, function (req, res) {
	console.log(req.body);
	createuser(req.body.user,req.body.password,req.body.name);
  res.send('welcome, ' + req.body.user);
})
module.exports= router;