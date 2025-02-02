function foo(x) {
  if (x == null) {
    return 0; 
  } else {
    return x.length; 
  }
}

console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(undefined)); //Output: 0
console.log(foo({})); //Output: undefined, should be 0