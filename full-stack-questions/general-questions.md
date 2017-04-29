# GENERAL FULL-STACK QUESTIONS

<strong>What is <i>polymorphism?</i></strong>

Polymorphism is the ability of a function to handle different types of objects. For example, a triangle, square, and circle can all use a "draw" function, because they inherit the "draw" function from their common "Shape" ancestor.

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

<strong>What is REST?</strong>

REST (Representational state transfer) is the underlying principle of how computers interact with each other through the web.

This principle is applied through HTTP requests and responses. The client computer (the browser) does not need to know anything beforehand about the other computer (the server) and the resources it hosts--the browser sends a request (i.e. GET, POST, PUT, DELETE) for some file. The server then responds by sending back the file--in other words, the server has to provide whatever information the client needs.
