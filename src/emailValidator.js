'use strict';

// Parte local: caracteres permitidos sin puntos al inicio/final ni consecutivos.
const LOCAL_PART = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*$/;

// Etiqueta de dominio: 1-63 caracteres alfanuméricos o guion, sin guion al inicio/final.
const DOMAIN_LABEL = /^[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/;

// TLD: al menos 2 letras.
const TLD = /^[A-Za-z]{2,}$/;

/**
 * Valida un email con formato usuario@dominio.tld.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== 'string' || email.length > 254) return false;

  const at = email.lastIndexOf('@');
  if (at <= 0 || at !== email.indexOf('@')) return false;

  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  if (local.length > 64 || !LOCAL_PART.test(local)) return false;

  const labels = domain.split('.');
  if (labels.length < 2) return false;
  if (!labels.every((label) => DOMAIN_LABEL.test(label))) return false;

  return TLD.test(labels[labels.length - 1]);
}

module.exports = { isValidEmail };
