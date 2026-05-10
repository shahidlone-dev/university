'use strict';

const jwt = require('jsonwebtoken');

if (!process.env.JWT_SECRET) {
  throw new Error('Missing JWT_SECRET in .env');
}

/**
 * Generate JWT token
 * @param {Object} user
 * @param {string} user.id
 * @param {string} user.phone
 */
function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      phone: user.phone,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d', // change if needed
    }
  );
}

module.exports = generateToken;