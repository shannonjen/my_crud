const express = require('express');

const environment = process.env.NODE_ENV || 'development';

const knexConfig = require('./knexfile.js')[environment];

const knex = require('knex')(knexConfig);

const bcrypt = require('bcrypt-as-promised');

const bodyParser = require('body-parser');
