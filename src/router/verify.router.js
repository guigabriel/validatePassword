const { Router } = require('express');
const { 
  validateLength,
  verifyUpperCase,
  verifyLowerCase,
  verifyDigit,
  verifyChar,
  verifyPassword,
} = require('../middleware/veirfy');

const passwordValidate = Router();

passwordValidate.post('/',
  validateLength,
  verifyUpperCase,
  verifyLowerCase,
  verifyDigit,
  verifyChar,
  verifyPassword
);


module.exports = passwordValidate;
