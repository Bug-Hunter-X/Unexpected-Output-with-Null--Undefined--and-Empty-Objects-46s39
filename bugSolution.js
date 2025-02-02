function foo(x) {
  // Solution 1: Using strict equality
  if (x === null || x === undefined) {
    return 0;
  } else if (typeof x === 'object' && x !== null && Object.keys(x).length === 0){
    return 0;
  } else if (typeof x === 'string' || Array.isArray(x)) {
    return x.length;
  } else {
    return 0; // Handle other cases appropriately
  }
}

console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(undefined)); // Output: 0
console.log(foo({})); // Output: 0
console.log(foo("hello")); // Output: 5