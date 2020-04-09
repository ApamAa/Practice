const hammingWeight = function(n) {
  let sum = 0;
  let number = n.toString(2);
  console.log(number);
  for (let i = 0; i < number.length; i++) {
    if (number[i] !== "0") {
      sum += 1;
    }
  }
  return sum;
};
console.log(hammingWeight(11111111111111111111111111111101));
