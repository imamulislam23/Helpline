1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: getElementById: it selects a specific element by its id;
getElementsByClassName: it gives a live html collection containing the same class;
querySelector: it gives the first element that matches selector;
querySelectorAll: it gives static node list that matches the selector

2. How do you **create and insert a new element into the DOM**?
Ans: First we create an element and then append it to a parent. To create element we use document.createElement() and to append it to an element we use .append().

3. What is **Event Bubbling** and how does it work?
Ans: Event bubbling is a process in which when an event occurs at an specific element it travels through its parents.  

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: it is a process where we can add event to a parent element so we don't have to add events particularly for all the children.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:preventDefault(): it stops the default browser behavior of an event.
stopPropagation(): it stops the event from bubbling up or capturing down the DOM tree.
