function foo(a, b) {
  if (a === null || b === null) {
    return 0; 
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0

//Improved version
function fooImproved(a, b) {
  if (a === null || b === null) {
    return 0;
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric inputs
  }
  return a + b;
}

console.log(fooImproved(1, 2)); // Output: 3
console.log(fooImproved(null, 2)); // Output: 0
console.log(fooImproved(1, null)); // Output: 0
console.log(fooImproved(null, null)); // Output: 0
console.log(fooImproved(0, 2)); // Output: 2
console.log(fooImproved('', 2)); // Output: NaN
console.log(fooImproved(false, 2)); // Output: NaN