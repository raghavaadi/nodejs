const express = require('express');
const router = express.Router();
const db=require('../dbhelper/dbstuff.js');

router.get('/',function(req,res,next){
	res.render('login',{
		title :'express',
		name : 'Raghav'
	});
});