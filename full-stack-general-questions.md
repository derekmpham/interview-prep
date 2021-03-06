# GENERAL FULL-STACK QUESTIONS

<strong>What is a full-stack?</strong>

A full-stack developer is someone who can single-handedly plan, design, develop, deploy, and maintain a given software application.

When talking about applications, we often talk about a "stack" of technologies that these applications are built on. For example, a web app would have the servers it runs on, a database, a web server, a server programming (backend) language, and HTML/CSS/JavaScript (frontend) on the client side. Complex applications may have even more technologies in the stack. So a full-stack developer is someone who can work with all those technologies.

<br>

<strong>What is MVC?</strong>

It's a architectural pattern for implementing user interfaces. There's the model ("M"), the view ("V"), and the controller ("C").

The model stores data that's retrieved through commands from the controller and displayed in the view. The view generates new output to the user based on changes in the model. And the controller can do a couple of things: (1) It can send commands to the model to update the model's state (i.e. editing a document); or (2) it can send commands to its associated view to change the view's presentation of the model (i.e. scrolling through a document).

<br>

<strong>What's the difference between and Model-View-Template (MVT) and MVC?</strong>

The difference is that Django (Python web framework) takes care of the Controller part, leaving us with the template. The template is an HTML file mixed with Django Template language (DTL).

<br>

<strong>What is <i>polymorphism?</i></strong>

Polymorphism is the ability of a function to handle different types of objects. For example, a triangle, square, and circle can all use a "draw" function, because they inherit the "draw" function from their common "Shape" ancestor.

<br>

<strong>What is <i>encapsulation</i>?</strong>

It's one of the fundamentals of object-oriented programming that refers to the packing of data and functions into a single component.

<br>

<strong>What is <i>inversion of control</i>?</strong>

It's a design programming technique in object-oriented programming in which custom-written portions of a computer program receive the flow of control from a generic, reusable library.

<br>

<strong>What's the difference between inheritance and composition?</strong>

Inheritance represents the "is a" relationship between different classes. It allows a class to have the same behavior as another class and extend or tailor that behavior to provide special action for specific needs.

Composition represents the "has a" or "part of" relationship between objects. It allows you to combine simple objects or data types into more complex ones.

<br>

<strong>What's horizontal scaling? Vertical scaling?</strong>

Horizontal scaling means that you scale your database by adding more machines into your pool of resources. Vertical scaling means that you scale by adding more power (i.e. CPU, RAM) to an existing machine.

<br>

<strong>What is <i>synchronous multimaster replication</i>?</strong>

In synchronous multimaster replication, each server can accept write requests, and modified data is transmitted from the original server to every other server before each transaction commits.

<br>

<strong>What is <i>asynchronous multimaster replication</i>?</strong>

In asynchronous multimaster replication, each server works independently, and periodically communicates with the other servers to identify conflicting transactions. The conflicts can be resolved by users or conflict resolution rules.

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

<strong>What are <i>microservices</i>?</strong>

Microservices are a style of software architecture that involves deliverying systems as a set of very small, granular, independent collaborating services.

<br>

<strong>What are the pros of microservices?</strong>

(1) The services are easy to replace; and (2) Services can be implemented using different programming languages, databases, hardware, and software environment, depending on what fits best.

<br>

<strong>What is the Single responsibility principle?</strong>

The Single responsibility principle is a rule where each class should have only one task or responsibility. If a class is performing more than one task, it leads to confusion.

<br>

<strong>What is the Interface segregation principle?</strong>

The Interface segregation principle is similar to the Single responsibility principle, but applicable to interfaces. Each interface should be responsible for a specific task. The developers shouldn't implement methods that they don't need.

<br>

<strong>What is the Open/closed principle?</strong>

The Open/closed principle is a rule in which the developers should focus more on extending the software entities rather than modifying them.

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

<strong>Explain the purpose of each of the HTTP request types when used with a RESTFUL web service.</strong>

There's five main HTTP request types used with a RESTFUL web service: GET, POST, PUT, UPDATE, and DELETE.

GET: Retrieves data from the server--should only retrieve data and should have no other effect.

POST: Sends data to the server for a new entity. It's often used to upload a file or submit a completed web form.

PUT: Similar to POST, but used to replace an existing entity (i.e. update).

PATCH: Similar to PUT, but used to update only certain fields within an existing entity.

DELETE: Removes data from the server.

<br>

<strong>What is an idempotent operation?</strong>

It's an operation that produces the same result no matter how manytimes it's repeated--PUT and DELETE methods are considered to be idempotent.

<br>

<strong>What is a nullipotent operation?</strong>

It's an call that produces no side effects--GET methods are considered to be "safe" or nullipotent.

<br>

<strong>What is the uniform access principle?</strong>

It's a rule in which client code should not be affected by a decision to implement an attribute as a field or method.

<br>

<strong>Explain the difference between stateless and stateful protocols. Which type of protocol is HTTP?</strong>

A stateless communications protocol treats each request as an independent transaction. It therefore does not require the server to retain any session, identity, or status information spanning multiple requests from the same source.

In contrast, a stateful communications protocol is one in which the responder maintains "state" information (session data, identity, status, etc.) across multiple requests from the same source.

HTTP is a stateless protocol. HTTP does not require the server to retain information or status about each user for the duration of the mulitple requests.

Some web servers implement states using different methods (using cookies, custom headers, hidden form fields, etc.). But at the very core of every web application, everything relies on HTTP, which is still a stateless protocol that is based on the simple request/response paradigm.

<br>

<strong>What is event-driven programming?</strong>

Event-driven programming is a paradigm in which the flow of the program is determined by events such as user actions (i.e. mouse clicks, key presses), sensor outputs, or messages from other programs/threads. In practice, it means that applications act on events.

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

<br>

<strong>Why do some people say "Ruby can't scale"?</strong>

Because Ruby is incapable of handling multiple concurrent threads and does not provide built-in asynchronous input/output (I/O).

So anything that requires long running requests are not suitable for Ruby solutions. That's when you use another language like Node.js instead to add asynchronous I/O.

<br>

<strong>What is cloud computing?</strong>

It's when you use a network of remote servers hosted on the Internet to store, manage, and process data rather than using your own physical servers.

<br>

<strong>What is <i>deadlock</i>? How about <i>livelock</i>?</strong>

Deadlock is a situation in which two or more competing actions are each waiting for the other to finish, and thus neither ever does. Livelock is similar to deadlock, expect that the states of the processes involved in the livelock constantly change with regards to one another, none progressing.

<br>

<strong>What is <i>race condition</i>?</strong>

It describes the behavior of the software system where the output is dependent on the sequence or timing of other uncontrollable events.

<br>

<strong>What is <i>thread contention</i>?</strong>

Thread contention is when two threats try to access either the same resource or related resources in such a way that at least one of the contending threads runs more slowly than it would if the other thread(s) were not running.

<br>

<strong>What is the difference between <i>thread</i> and <i>process</i>?</strong>

Threads (of the same process) run in a shared memory space, while processes run in separate memory spaces.

<br>

<strong>What is <i>sequential consistency</i>?</strong>

Sequential consistency is when the result of any execution is the same as if the operations of all the processors were executed in some sequential order, and the operations of each individual processor appear in this sequence in the order specified by its program.

<br>

<strong>What is <i>memory barrier</i>?</strong>

It's a type of barrier instruction that causes a CPU or compiler to enforce an ordering constraint on memory operations issued before and after the barrier instruction.

<br>

<strong>What is <i>data race</i>?</strong>

A program contains a data race when a program contains two conflicting accesses that are not ordered by a "happens-before" relationship. Two accesses ("reads of" or "writes to") to the same variable are said to be conflicting if at least one of the accesses is a write.

<br>

<strong>How do insertion sort, heap sort, quick sort, and merge sort work?</strong>

Insertion sort takes elements of the array sequentially, and maintains a sorted subarray to the left of the current point. It does this by taking an element, finding its correct position in the sorted array, and shifting all following elements by 1, leaving a space for the element to be inserted.

Heap sort starts by building a max heap. A binary max heap is a nearly complete binary tree in which each parent node is larger or equal to its children. The heap is stored in the same memory in which the origin array elements are. Once the heap is formed, it completely replaces the array. After that, we take and remove the first element, restore the heap property, thus reducing the heap size by 1, after which we place the max element at the end of that memory. This is repeated until we empty out the heap, resulting in the smallest element being in the first place, and the following elements being sequentially larger.

Quick sort is performed by taking the first (leftmost) element of the array as a pivot point. We then compare it to each following element. When we find one that is smaller, we move it to the left. The moving is performed quickly by swapping that element with the first element after the pivot point, and then swapping the pivot point with the element after it. After going through the entire array, we take all points on the left of the pivot and call quick sort on that subarray, and we do the same to all points on the right of the pivot. The recursion is performed until we reach subarrays of 0-1 elements in length.

Merge sort recursively halves the given array. Once the subarrays reach trivial length, merging begins. Merging takes the smallest element between two adjacent subarrays and repeats that step until all elements are taken, resulting in a sorted subarray. The process is repeated on pairs of adjacent subarrays until we arrive at the starting array, but sorted.

<br>

<strong>What is <i>unit testing</i>?</strong>

It tests a single unit of functionality.

<br>

<strong>What is <i>component testing</i>?</strong>

It tests each component (i.e. module) in an application separately. It finds the defects in the module and verifies the functioning of software.

It's done after unit testing, and unlike unit testing, component testing uses real data instead of dummy data to test written code.

<br>

<strong>What is <i>integration testing</i>?</strong>

It examines several parts of a system to make sure that when integrated, these parts behave as expected.

<br>

<strong>What is <i>user acceptance testing</i>? How about <i>behavior-driven development</i>?</strong>

User acceptance testing the last phase of the software testing process and often considered the last phase in the web development process. During user acceptance testing, you record and correct any defects that are discovered while people from the intended audience are using your product. It's the closest thing to a "real world" test available. It also gives users the chance to interact with the software and find out if everything works as it should.

Behavior-drive development is a software development methodology where an application is specified and designed by describing how its behavior should appear to an outside observer.

<br>

<strong>What's the difference between a stub and a mock?</strong>

A stub is a test double with preprogrammed behavior, while a mock is a stub with preprogrammed expectations.

<br>

<strong>List some different types of tests</strong>

Acceptance testing, functional testing, smoke testing, regression testing, unit testing, integration testing, and stress testing.

<br>

<strong>What is tail recursion?</strong>

It's a subroutine call performed as the final action of a procedure.

<br>

<strong>What is dynamic binding?</strong>

It's the process of linking a procedure call to a specific sequence of code at run-time, which means that the code to be executed for a specific procedure call is not known until run-time.
