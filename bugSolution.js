function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return a + b; 
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return a - b; 
}

console.log(add(5,3)); // Output: 8
console.log(subtract(5,3)); // Output: 2

//This will throw an error because of type checking
console.log(add(5,"3")); // throws an error