const {
MIN_LENGTH,
MIN_UPPERCASE,
MIN_LOWERCASE,
MIN_DIGIT,
MIN_SPECIALCHARS
} = require('../utils/rules')

let arr = [];

const validateLength = (req, res, next) => {
  const { password } = req.body;
  if (password === null) return res.status(400).json({message: 'Password cannot be null'});
  if (password.length < MIN_LENGTH) {
    arr.push('minLength');
    return next();
  };
 return next();
};

const verifyUpperCase = (req, res, next) => {
  const { password } = req.body;
  const upperCase = password.match(/[A-Z]/g);
  if (upperCase === null) return res.status(400).json({message: 'Uppercase is required'});
  if(upperCase.length < MIN_UPPERCASE) {
    arr.push('minUpperCase');
    return next();
  };
 return next();
};

const verifyLowerCase = (req, res, next) => {
  const { password } = req.body;
  const lowerCase = password.match(/[a-z]/g);
  if (lowerCase === null) return res.status(400).json({message: 'Lowercase is required'});
  if(!lowerCase.length > MIN_LOWERCASE) {
    arr.push('minLowerCase');
    return next();
  };
  return next();
};

const verifyDigit = (req, res, next) => {
  const { password } = req.body;
  const digit = password.match(/[0-9]/g);
  if (digit === null) return res.status(400).json({message: 'A digit is require'});
  if (digit.length < MIN_DIGIT) {
    arr.push('minDigit');
    return next();
  };
  return next();
};

const verifyChar = (req, res, next) => {
  const { password } = req.body;
  const specialChars = password.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
  if (specialChars === null) return res.status(400).json({message: 'Special character is required'});
  if (specialChars.length < MIN_SPECIALCHARS) {
    arr.push('minSpecialChar');
    return next();
  };
  return next();
};

const verifyPassword = (_req, res, _next) => {
  if (arr.length > 0) {
    const obj = {
      verify:false,
      noMatch: arr
    };
    arr = [];
    return res.status(400).json(obj);
  }
  return res.status(200).json({
    verify: true,
    noMatch: arr
  });
};

module.exports = {
  validateLength,
  verifyUpperCase,
  verifyLowerCase,
  verifyDigit,
  verifyChar,
  verifyPassword,
}
