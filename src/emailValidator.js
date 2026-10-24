'use strict';

const EMAIL_REGEX = /^\S+@\S*\.\S*$/;

/**
 * Valida un email con formato usuario@dominio.tld.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return typeof email === 'string' && EMAIL_REGEX.test(email);
}

module.exports = { isValidEmail };
