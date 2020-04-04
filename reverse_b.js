const reverseBinery = function(n) {
  // console.log(n)
  let out = '';
  for (let i = n.length - 1; i >= 0; i--) {
    out += n[i];
  }
  return out;
};

console.log(reverseBinery('00000010100101000001111010011100'));