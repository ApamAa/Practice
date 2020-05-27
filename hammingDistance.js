/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {  
    counter = 0;
    let xBits = x.toString(2);
    let yBits = y.toString(2);
    largerLength = xBits.length;
    if(yBits.length > largerLength ) {
      largerLength = yBits.length;
      xBits = "0".repeat(yBits.length - xBits.length) + xBits;  
    } else {
        yBits ="0".repeat(xBits.length - yBits.length) + yBits;  

    }
    for(let i=0; i<largerLength;i++ ) {
         if(xBits[i]!==yBits[i]) {
             counter += 1;
         }
     }
 return counter;
};