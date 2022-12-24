const express = require('express');
const passwordValidate = require('./router/verify.router');
const app =express();

app.use(express.json());

app.use('/verify', passwordValidate);

module.exports = app
