const mergeTwoLists = function(l1, l2) {
  for (let i = 0; i < l2.length; i++) {
    l1.push(l2[i]);
  }
  return l1.sort(function(a, b) {
    return a - b;
  });
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
