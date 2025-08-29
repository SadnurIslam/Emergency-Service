
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
getElementById: getElementById returns a single element that having the unique id.
getElementsByClassName: getElementsByClassName returns all elements with the class name as a HTMLCollection. We cannot access element here directly using forEach loop
querySelector: querySelector returns only the first element that matches the css selector.
querySelectorAll: querySelectorAll returns all elements that matches the css selector as a NodeList. We can use forEach loop to access element here.


2. How do you create and insert a new element into the DOM?
Ans:
We can use document.createElement to a create a new html element. Then we can set attribute and styles to the element. We can also add some classList. We can also add html elements or text inside the created element using innerHTML/innerText. Then we can append the created element to a parent element using appendChild().
Example: 
const card = document.createElement('div');
element.innerText = "This is a card";
cardsContainer.appendChild(element);


3. What is Event Bubbling and how does it work?
Ans:
Event bubbling means an event starts from the element where it happened and then moves up (propagates) to its parent elements until the top of the document.
Example:
<body>
    <div>
        <button>Click here</button>
    </div>
</body>
Here clicking the <button> will trigger button click, then div click, and then body click.


4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event Delegation is a technique where we can attach a single event listener to a parent element, and handle events for its child elements using event bubbling. Instead of adding listeners to many elements, we can add one to the parent and detect the target using event.target.
Usefulness:
i. It saves memory (fewer listeners).
ii. It handles dynamically added elements automatically.
ii. It makes code cleaner, readable and more efficient.


5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault stops the default browser action (like link navigation or form submission).
stopPropagation stops the event from moving up (bubbling) to parent elements.
