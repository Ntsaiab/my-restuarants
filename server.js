const express = require('express');
const app = require('./restaurants_api/app');
app.use(express.static('build'));