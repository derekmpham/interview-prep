# COMMONLY ASKED JAVASCRIPT QUESTIONS

<strong>Explain event delegation.</strong>

Event delegation is when you add a common event to multiple elements--including ones we may add in the future--by adding a single event listener to an ancestor element of these elements. This makes it easier for us, since we don't have to add the same event listener to every single element we want to add a common event to.

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
