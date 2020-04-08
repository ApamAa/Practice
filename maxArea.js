const maxArea = function(heights) {
  let area = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      let tempArea = (j - i) * Math.min(heights[i], heights[j]);
      if (area < tempArea) {
        area = tempArea;
      }
    }
  }
  return area;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
