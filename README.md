# Type Coercion Bug in Javascript
This repository demonstrates a common type coercion bug in Javascript that can lead to unexpected results. The bug occurs when a function that is designed to work with numbers is passed a string argument. Javascript's loose typing system will coerce the string argument to a number, but this can lead to unexpected results if the string is not a valid number.  The solution involves adding type checking to the function to ensure that the arguments are of the correct type. 

## Bug
The bug is demonstrated in the `bug.js` file. The `add()` and `subtract()` functions are designed to work with numbers. However, when we pass a string "3" to the `add()` function, Javascript does type coercion and concatenates the string with number instead of addition, leading to an unexpected result.

## Solution
The solution is demonstrated in the `bugSolution.js` file. The solution involves adding type checking to the function to ensure that the arguments are of the correct type. This prevents the type coercion bug from occurring and ensures that the function always returns the expected result.