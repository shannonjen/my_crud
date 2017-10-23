const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const ejs = require('ejs');
app.set('view engine', 'ejs');

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile.js')[environment];
const knex = require('knex')(knexConfig);


const bcrypt = require('bcrypt-as-promised');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/snakes', function(req,res,next){
    res.render('signup');
})


app.post('/users', function(req,res,next){
  const { username, password } = req.body;
console.log(req.body);
  bcrypt.hash(req.body.password, 12)
  .then(function(hashed_password){
    return knex('users').insert({ username, hashed_password});
  })
  .then(function(){
    res.sendStatus(200);
  })
  .catch(function(err){
    next(err);
  });
});





app.listen(port, function(){
  console.log('Listening on port', port);
})
