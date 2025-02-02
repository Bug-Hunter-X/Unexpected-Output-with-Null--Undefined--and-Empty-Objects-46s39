# JavaScript Bug: Unexpected Output with Null, Undefined, and Empty Objects

This repository demonstrates a common, yet subtle, bug in JavaScript related to handling null, undefined, and empty objects. The `foo` function aims to return 0 for null or undefined inputs and the length for arrays or strings.  However, it produces an unexpected output when an empty object is passed.

## Bug Description
The issue stems from the loose equality check (`==`) used in the `if` condition. While it correctly handles null and undefined, it does not consistently handle empty objects.  When an empty object is passed, the check `x == null` evaluates to false, leading to an attempt to access the `length` property of the object, which is undefined.

## Solution
The solution involves using strict equality (`===`) for a precise check, or alternatively, employing a more robust check to handle different types of nullish values and empty objects.  Both approaches are demonstrated in `bugSolution.js`.