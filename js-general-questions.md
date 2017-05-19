# COMMONLY ASKED JAVASCRIPT QUESTIONS

<strong>Explain event delegation.</strong>

Event delegation is when you add a common event to multiple elements--including ones we may add in the future--by adding a single event listener to an ancestor element of these elements. This makes it easier for us, since we don't have to add the same event listener to every single element we want to add a common event to.

<br>
<strong>What's the difference between an "attribute" and a "property"?</strong>
<br>
<br>
In short, attributes are in your HTML file, while properties are in the DOM tree. This means that attributes do not change and always carry initial default values, but HTML properties can--for example, an HTML property value can change when a checks a checkbox.
<br>
<br>
Attributes carry additional information about an HTML element and come in "name='value'" pairs. For instance, a "div" tag can have a "class" attribute with "first" as a value. On the other hand, property is a representation of an attribute in the DOM tree. So that same "div" tag would have a property "className" with a value of "first".
<br>
<br>
<br>
<strong>Explain how "this" works in JavaScript.</strong>
<br>
<br>
In JavaScript, "this" is a property that refers to the object that calls on the function using "this". In terms of scope, "this" prioritizes local objects over global objects--in other words, if there's no current object, "this" refers to the global object.
<br>
<br>
<br>
<strong>Explain how prototypical inheritance works.</strong>
<br>
<br>
Prototypical inheritance is how you implement object orientation in JavaScript--it's the way for you to enable the reuse of behaviors or functions in JavaScript. In prototypical inheritance, an object inherits from another object--this differs from the classical inheritance found in Object-Oriented languages, in which a class inherits from another class.
<br>
<br>
For example, you can create an object using a constructor function, and then create another object variable defined as a new instance of the first object. You can also add new functions or characteristics to the first object through what's called the "prototype property", allowing these newly added functions or characteristics to be "passed on" to the second object.
<br>
<br>
<br>
<strong>When is classical inheritance an appropriate choice?</strong>
<br>
<br>
Never, in JavaScript we favor object composition over classical inheritance.
<br>
<br>
<br>
<strong>Can you name two programming paradigms important for JavaScript developers?</strong>
<br>
<br>
(1) Object-Oriented Programming through prototypical inheritance, and (2) Functional Programming through things like first class functions.
<br>
<br>
<br>
<strong>What is functional programming?</strong>
<br>
<br>
Functional programming produces programs by composing mathematical functions and avoids shared state and mutable data. Functional programming only allows pure functions (same inputs will always return same output, produce no side effects, and rely on no external mutable state).
<br>
<br>
Function composition is a big part of functional programming. Function composition is the process of combining two or more functions to produce a new function. It's like snapping together a series of pipes for our data to flow through.
<br>
<br>
First class functions, higher-order functions, and functions as arguments all support functional programming.
<br>
<br>
<br>
<strong>What are higher-order functions?</strong>
<br>
<br>
Functions that can take other functions as arguments.
<br>
<br>
<br>
<strong>What's the difference between == and ===?</strong>
<br>
<br>
"==" is a type converting equality, meaning that "==" will convert variable to value regardless of data type. So both 2==2 and "2"==2 will return true.
<br>
<br>
However, "===" is a strict equality operator, meaning that "===" will not convert values automatically. So 2===2 will return true, but "2"===2 will return false.
<br>
<br>
<br>
<strong>What is the difference between null and undefined?</strong>
<br>
<br>
Null is an assignment value, and can be assigned to a variable as a representation of no value.
<br>
<br>
Undefined represents a variable that has been declared but has not yet been assigned a value.
<br>
<br>
<br>
<strong>What is hoisting?</strong>
<br>
<br>
Hoisting is when you move all declarations to the top of the current scope. So with hoisting, a variable can be used before being declared.
