var array = "-1 4 9 -5 10 1 2 -1".split(' '); 

// Create a sorted array where the first item is the one which is the closest to 0.
// If two numbers are at an equal distance from 0, then the positive one will appear first in the sorted array.
var sortedArray = array.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);

var result = sortedArray[0] || 0;

console.log(result);
