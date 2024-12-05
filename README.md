# Unexpected NaN Result from Loose Typing in JavaScript

This example demonstrates a subtle bug that arises from JavaScript's loose typing system when working with null, undefined, and NaN (Not a Number).

The function `foo` attempts to handle these cases, but the addition operation with NaN results in a unexpected NaN, instead of throwing an error or returning a default value.

**File:** `bug.js` contains the buggy function. `bugSolution.js` provides a corrected version.

This example highlights the importance of thorough type checking and handling of edge cases when dealing with potentially unexpected input in JavaScript.