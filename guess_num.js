const guessNumber = function(n) {
  let floor = 1;
  let ceiling = n;
  while (floor <= ceiling) {
    let mid = Math.floor((floor + ceiling) / 2);
    if (guess(mid) === 0) {
      return mid;
    } else if (guess(mid) === 1) {
      floor = mid + 1;
    } else {
      ceiling = mid - 1;
    }
  }
};
