module.exports = function reverse (n) {
  let str = (Math.abs(n)).toString().split('');
  let result = (str.reverse()).join('');
  return result;
}
