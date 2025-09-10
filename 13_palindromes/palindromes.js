const palindromes = function (string) {
  const normalized = string.toLowerCase().replace(/[^a-z0-9]+/g, '');
  let reversed = normalized.split('').reverse().join('');
  
  if (normalized === reversed) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
