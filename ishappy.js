const isHappy = function(n) {
  let result = false;
  let array = n
    .toString()
    .split("")
    .map((n) => n * n);
  let sum = array.reduce((a, b) => a + b);
  if (sum === 1) {
    result = true;
  }
  try {
    return isHappy(sum);
  } catch (e) {
    return result;
  }
};

console.log(isHappy(1));
