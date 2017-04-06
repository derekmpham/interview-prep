COMMONLY ASKED JAVASCRIPT QUESTIONS

Explain event delegation.

Event delegation is when you add a common event to multiple elements--including ones we may add in the future--by adding a single event listener to an ancestor element of these elements. This makes it easier for us, since we don't have to add the same event listener to every single element we want to add a common event to.


Explain how "this" works in JavaScript.

In JavaScript, "this" is a property that refers to the object that calls on the function using "this". In terms of scope, "this" prioritizes local objects over global objects--in other words, if there's no current object, "this" refers to the global object.
