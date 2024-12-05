function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (typeof x === 'undefined') {
    return 1; // Handle undefined case
  } else if (isNaN(x)) {
    return -1; // Explicitly handle NaN
  } else {
    return x + 1; // Handle number case
  }
}

console.log(foo(null));   // Output: 0
console.log(foo(undefined)); // Output: 1
console.log(foo(5));      // Output: 6
console.log(foo(NaN));    // Output: -1