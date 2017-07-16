# COMMONLY ASKED JAVASCRIPT QUESTIONS

<strong>Explain event delegation.</strong>

Event delegation is when you add a common event to multiple elements--including ones we may add in the future--by adding a single event listener to an ancestor element of these elements. This makes it easier for us, since we don't have to add the same event listener to every single element we want to add a common event to.

<br>
<strong>Explain DOM?</strong>
<br>
<br>
It stands for Document Object Model. A document object represents the html document. It can be used to access and change the html content.
<br>
<br>
<br>
<strong>What is BOM?</strong>
<br>
<br>
It stands for Browser Object Model. It provides interaction with the browser. The default of browser is the window.
<br>
<br>
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
<strong>What is asynchronous programming, and why is it important in JavaScript?</strong>
<br>
<br>
It's when the engine runs in an event loop. When a blocking operation is needed, the request is started, and the code keeps running without blocking for the result. When the response is ready, an interrupt is fired, which causes an event handler to be run, where the control flow continues. In this way, a single program thread can handle many concurrent operations.
<br>
<br>
UIs are asynchronous by nature, and spend most of their time waiting for user input to interrupt the event loop and trigger event handlers. Node is also asynchronous by default, meaning that the server works in much the same way, waiting in a loop for a network request, and accepting more incoming requests while the first one is being handled.
<br>
<br>
It's important in JavaScript, because it's a very natural fit for UI code, and very beneficial to performance on the server (i.e. a lot of users at once).
<br>
<br>
<br>
<strong>What is synchronous programming?</strong>
<br>
<br>
It means that code is executed from top to bottom, blocking on long-running tasks like network requests and disk I/O.
<br>
<br>
<br>
<strong>What are global variables? How are they declared and what are the problems associated with using them?</strong>
<br>
<br>
Global variables are available throughout the length of the code--in other words, they have no scope. "var" is used to declare a local variable or object. So if you omit "var", you're declaring a global variable.
<br>
<br>
Problems with using global variables deal with the clash of variable names of local and global scope. Also, it's difficult to debug and test code that relies on global variables.
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
<strong>When is prototypal inheritance an appropriate choice?</strong>
<br>
<br>
When you want to enable composition (i.e. delegation, concatenative, functional). So in situations where modules or functional programming don't provide an obvious solution, when you need to compose objects from multiple sources, and any time you need inheritance.
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
<strong>What does “favor object composition over class inheritance” mean?</strong>
<br>
<br>
It means that code reuse should be achieved by assembling smaller units of functionality into new objects instead of inheriting from classes and creating object taxonomies to make your code more flexible.
<br>
<br>
So you want to use "can-do" or "has-a" or "uses-a" relationships instead of "is-a" relationships. And you'd want avoid things like class hierarchies, brittle base classes, tight coupling, rigid taxonomy, and awkward taxonomy (gorilla problem).
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
<strong>What are the pros and cons of functional programming vs object-oriented programming?</strong>
<br>
<br>
For object-oriented programming, it's easy to understand the basic concept of objects and easy to interpret the meaning of method calls. Object-oriented programming tends to use an imperative style rather than a declarative style, which reads like a straight-foward set of instructions for the computer to follow.
<br>
<br>
But the biggest con of object-oriented programming is that it typically depends on shared state. Objects and behaviors are typically tacked together on the same entity, which may be accessed at random by any number of functions with non-deterministic order, potentially leading to undesirable behavior like race conditions.
<br>
<br>
For functional programming, you avoid any shared state or side-effects, which eliminates bugs caused by multiple functions competing for the same resources. And functions tend to be radically simplified and easily recomposed for more generally reusable code compared to object-oriented programming (i.e. tacit programming). Also, functional programming tends to favor declarative and denotational styles, which do not spell out step-by-step instructions for operations, but instead concentrate on what to do, letting the underlying functions take care of the how. This leaves tremendous latitude for refactoring and performance optimization, even allowing you to replace entire algorithms with more efficient ones with very little code change.
<br>
<br>
But a big con of functional programming is that functional programming has a much steeper learning curve than object-oriented programming, because the broad popularity of object-oriented programming has allowed the language and learning materials of object-oriented programming to become more conversational, whereas the language of functional programming tends to be much more academic and formal.
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
<br>
<br>
<br>
<strong>Does JavaScript have concept level scope?</strong>
<br>
<br>
No, JavaScript doesn't have concept level scope. The variable declared inside the function has scope inside the function.
<br>
<br>
<br>
<strong>What is "use strict"?</strong>
<br>
<br>
"use strict" tells JavaScript to execute in 'strict mode', which prevents developers from using undeclared variables.
<br>
<br>
<br>
<strong>Explain event bubbling and how to prevent it</strong>
<br>
<br>
Event bubbling is when an event triggers at the deepest possible element, and triggers on parent elements in nesting order. As a result, when you click on a child element, the event bubbles up from parent to parent until it is handled, or until it reaches the document object.
<br>
<br>
<br>
<strong>What is 'promise'?</strong>
<br>
<br>
'Promise' is a proxy for a value that's not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
<br>
<br>
<br>
<strong>What is jQuery?</strong>
<br>
<br>
It's a JavaScript library that makes it easier to use JavaScript on the front end. You can do things like DOM manipulation and AJAX calls without having to write as many lines of JavaScript.
<br>
<br>
<br>
<strong>What is NaN? What is its type? How can you reliably test if a value is equal to NaN?</strong>
<br>
<br>
NaN stands for "not a number". It results from operations that cannot be performed, because one of the operands is non-numeric (i.e. "string"/4), or because the result of the operation is non-numeric (i.e. 4/0).
<br>
<br>
Even though NaN means "not a number", its type is Number. Also, when you compare NaN to anything--even itself--is false.
<br>
<br>
One way to test if a value is equal to NaN is do value !== value, which only return true if the value is equal to NaN. You can also use the isNaN() function.
<br>
<br>
<br>
<strong>What's the difference between 'const' and 'var'?</strong>
<br>
<br>
'const' prevents you from changing the value of a variable after the initial setting. It's supposed to "protect" you against mistakes (similar to how static typing prevents you from unintended value conversions).
<br>
<br>
<br>
<strong>What is variable typing?</strong>
<br>
<br>
Variable typing is when you assign a number to a variable and then assign that same variable to a string.
<br>
<br>
<br>
<strong>What is the  difference between window.onload and the jQuery $(document).ready() method?</strong>
<br>
<br>
The window.onload method gets executed after all the page elements have loaded (HTML, CSS, images), which can result in a delay.
<br>
<br>
The $(document).ready() method begins running code as soon as the DOM is loaded, which should be faster and less prone to loading errors across different browsers.
<br>
<br>
<br>
<strong>What is a prompt box?</strong>
<br>
<br>
It's a text box that allows the user to enter text or number as an input.
<br>
<br>
<br>
<strong>What would be the result of 4+5+"8"?</strong>
<br>
<br>
98. 4 and 5 will be added numerically, since they're integers. And the sum of that and "8" will be concatenated, since "8" is a string.
<br>
<br>
<br>
<strong>Explain how you can submit a form using JavaScript?</strong>
<br>
<br>
document.form[0].submit();
<br>
<br>
<br>
<strong>How can you change the class/style of an element?</strong>
<br>
<br>
To change the class, do: document.getElementById("idName").className = "anyclass";
<br>
<br>
To change the style, do something like: document.getElementById("idName").style.fontSize = 20;
<br>
<br>
<br>
<strong>What's the use of the push method in JavaScript?</strong>
<br>
<br>
It's used to add or append one or more elements to the end of an array. We can append multiple elements by passing multiple arguments with push.
<br>
<br>
<br>
<strong>What does the unshift method do in JavaScript?</strong>
<br>
<br>
It's like the push method, expect that it works at the beginning of the array. The unshift method is used to prepend one or more elements to the beginning of the array.
<br>
<br>
<br>
<strong>Explain the pop() method in JavaScript?</strong>
<br>
<br>
It's similar to the shift() method, but the difference is that the shift() method works at the start of the array. Also, the pop() method takes the last element off of the given array and returns it. The array that's being called is then altered.
<br>
<br>
Example: If var room = ["chair", "table", "light"], and you do room.pop(); room = ["chair", "table"]
<br>
<br>
<br>
<strong>What is the function of the delete operator?</strong>
<br>
<br>
It's to delete all variables and objects in a program, but it cannot delete variables declared "var".
<br>
<br>
<br>
<strong>What is the use of Void(0)?</strong>
<br>
<br>
It's used to prevent the page from refreshing by passing 0 as the parameter while calling.
<br>
<br>
Void(0) is used to call another method without refreshing the page.
<br>
<br>
<br>
<strong>What are all the looping structures in JavaScript?</strong>
<br>
<br>
For, while, and do-while loops.
<br>
<br>
<br>
<strong>What are all the types of pop-up boxes in JavaScript?</strong>
<br>
<br>
Alert, Confirm, and Prompt.
<br>
<br>
<br>
<strong>What are the advantages of JavaScript?</strong>
<br>
<br>
There's less server interaction, immediate feedback to visitors, increased interactivity, and richer interfaces.
<br>
<br>
Less server interaction: You can validate user input before sending the page off to the server. This saves server traffic, which means less load on your server.
<br>
<br>
Immediate feedback to visitors: They don't have to wait for a page reload to see if they've forgotten to enter something.
<br>
<br>
Increased interactivity: You can create interfaces that react when the user hovers over them with a mouse or activates them through the keyboard.
<br>
<br>
Richer interfaces: You can use JavaScript to include items like drag-and-drop components and sliders to give a rich interface to visitors.
<br>
<br>
<br>
<strong>What are the disadvantages of using JavaScript?</strong>
<br>
<br>
JavaScript's main weakness is security. For example, one of the most common errors is HTML injection, which allows third parties to inject JavaScript into your security context. This allows an attacker to control what a user does on your site and completely break account security.
<br>
<br>
Another weakness is JavaScript's ubiquity and versatility. It can be a double-edged sword in that there's a lot of room for programming quirks that can lead to inconsistent performance across different platforms.
<br>
<br>
<br>
<strong>What are JavaScript Cookies?</strong>
<br>
<br>
Cookies are the small test files stored in a computer and they're created when the user visits the websites to store information that they need. Examples include username details and shopping cart information from previous visits.
<br>
<br>
<br>
<strong>How would you use persistent storage on browsers? What options would you use?</strong>
<br>
<br>
For HTML browsers, a good choice would be local storage and persistent storage. For non-HTML browsers, you would use cookies.
<br>
<br>
<br>
<strong>What is an anonymous function in JavaScript?</strong>
<br>
<br>
It's a function declared without any named identifier and is generally not accessible after its declaration.
<br>
<br>
<br>
<strong>What are ways in which you can reduce the load time of a web application?</strong>
<br>
<br>
You can enable browser caching, optimize images, minify resources, minimize HTTP requests, and reduce redirects.
