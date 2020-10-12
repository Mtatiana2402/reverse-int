module.exports = function reverse (n) {
    n = String(n);
  var newN = n.split('').reverse().filter(function(el){
      return el !=='-';
  });
  newN = newN.join('');
  return Number(newN);
}
