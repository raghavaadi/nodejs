const express = require('express');
const router = express.Router();
const db=require('../dbhelper/dbstuff.js');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


 async function retrieve_user(user1,pass1,res){
	const login= await db.user.find({user:user1,password:pass1});
try{
	const op = JSON.stringify({login});
	const op1 = JSON.parse(op);
	try{
	if(op1.login[0].password !== null)
{
res.redirect('/about')
}}
catch(e)
{
	console.log(e);
			res.redirect('/register');
}
	}
	catch(e)
		{
			console.log(e);
			res.redirect('/register');
		}

	//console.log(op1.login[0].password);
// if(op1.login[0].password == null)
// {
// res.redirect('/register')
// }
// else
// {
// res.redirect('/about')	
// }
};


router.get('/',function(req,res,next){
	res.render('login',{
		title :'express',
		name : 'Raghav'
	});
});
router.post('/', urlencodedParser, function (req, res) {
	console.log(req.body);
	retrieve_user(req.body.user,req.body.password,res);
//  res.send('welcome, ' + req.body.user);
})
module.exports= router;