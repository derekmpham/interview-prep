# GENERAL FULL-STACK QUESTIONS

<strong>What is <i>polymorphism?</i></strong>

Polymorphism is the ability of a function to handle different types of objects. For example, a triangle, square, and circle can all use a "draw" function, because they inherit the "draw" function from their common "Shape" ancestor.

<br>

<strong>What's the difference between inheritance and composition?</strong>

Inheritance represents the "is a" relationship between different classes. It allows a class to have the same behavior as another class and extend or tailor that behavior to provide special action for specific needs.

Composition represents the "has a" or "part of" relationship between objects. It allows you to combine simple objects or data types into more complex ones.

<br>

<strong>What's horizontal scaling? Vertical scaling?</strong>

Horizontal scaling means that you scale your database by adding more machines into your pool of resources. Vertical scaling means that you scale by adding more power (i.e. CPU, RAM) to an existing machine.

<br>

<strong>Why do you need a web server?</strong>

You need a web server to store web site files and broadcast them over the internet for your site visitors to see.

<br>

<strong>What is <i>separation of concerns</i>?</strong>

Separation of concerns is a design principle where each section of a program addresses a specific feature with as little overlap in functionality as possible.

<br>

<strong>What are the drawbacks of not using <i>separation of concerns</i>?</strong>

There are four main drawbacks of not using separation of concerns. First, adding new features would take an order of magnitude longer. Second, it's impossible to optimize. Third, it's extremely difficult to test when we're not using separation of concerns. And finally, fixing and debugging can be a nightmare--fixing something in one place can lead to something else breaking that seems completely unrelated.

<br>

<strong>What is the single responsibility principle?</strong>

The single responsibility principle is a rule where each class should have only one task or responsibility. If a class is performing more than one task, it leads to confusion.

<br>

<strong>What are the advantages of using modules?</strong>

(1) Reuse, (2) Decoupling, and (3) Namespace. You can easily reuse code using modules. If certain tasks are sectioned off to certain functions or classes, you can reuse that particular code whenever you need to perform that task again.

You can also decouple code using modules. This allows you to not have a class or object be too dependent on another class or object.

Modules also define a namespace, where you can use your methods and constants without having to worry about being stepped on by other methods and constants.

<br>

<strong>What is REST?</strong>

REST (Representational state transfer) is the underlying principle of how computers interact with each other through the web.

This principle is applied through HTTP requests and responses. The client computer (the browser) does not need to know anything beforehand about the other computer (the server) and the resources it hosts--the browser sends a request (i.e. GET, POST, PUT, DELETE) for some file. The server then responds by sending back the file--in other words, the server has to provide whatever information the client needs.

<br>

<strong>What is an idempotent operation?</strong>

It's an operation that produces the same result no matter how manytimes it's repeated--PUT and DELETE methods are considered to be idempotent.

<br>

<strong>What is a nullipotent operation?</strong>

It's an call that produces no side effects--GET methods are considered to be "safe" or nullipotent.

<br>

<strong>What is event-driven programming?</strong>

Event-driven programming is a paradigm in which the flow of the program is determined by events such as user actions (i.e. mouse clicks, key presses), sensor outputs, or messages from other programs/threads.

<br>

<strong>What is Agile?</strong>

It's a set of software development principles that emphasizes: (1) Individuals and interactions over processes and tools, (2) Working software over comprehensive documentation, (3) Customer collaboration over contract negotiation, and (4) Responding to change over following a plan.

<br>

<strong>What is Scrum?</strong>

Scrum is "a lightweight process framework" for agile development. There are three core roles in the Scrum framework: (1) Product owner, (2) Development team, and (3) Scrum master. The process is made up of timeboxed events called "sprints".

The product owner is responsible for "big-picture" goals--they're focused on having a vision for what should be built and on conveying that vision to the entire team. The product owner is more focused on the business/users side than the technical side.

The development team is responsible for delivering "potentially shippable increments" (PSIs) of product at the end of each sprint.

And the scrum master is the team facilitator, similar to a project manager but different in a sense that a scrum master is less focused on people management. The scrum master basically makes sure that the team does not get distracted.

<br>

<strong>What is Ο(n)? Ω(n)? Θ(n)?</strong>

Ο(n), Ω(n), and Θ(n) all refer to the performance or complexity of an algorithm.

Ο(n) describes the worst-case scenario. Ω(n) describes the best-case scenario. And Θ(n) describes the average-case scenario.
