'use strict';
const Joi=require('joi');
const express = require('express');
const app = express();
const routes=require('./routes/post.js');
const bodyParser = require('body-parser');
const index=require('./routes/index.js');
const about=require('./routes/about.js');
const login=require('./routes/login.js');
const register=require('./routes/register.js');
const path=require('path');



app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(bodyParser.json());
//app.get('/', routes.home);
app.use('/',index);
app.use('/about',about);
app.use('/login',login);
app.use('/register',register);

app.get('/api/healthcare', routes.healthcare);
app.get('/api/healthcare/new/:name/:status',routes.adduser);
app.get('/api/healthcare/:name', routes.user);
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!!!!!')
})
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`connecting port ${port}....`)})