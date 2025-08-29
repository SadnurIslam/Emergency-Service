
1. <b>What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</b>
<br>
<b>Ans:</b> <br>
<b>getElementById:</b> getElementById returns a single element that having the unique id.
<br>
<b>getElementsByClassName:</b> getElementsByClassName returns all elements with the class name as a HTMLCollection. We cannot access element here directly using forEach loop.
<br>
<b>querySelector:</b> querySelector returns only the first element that matches the css selector.
<br>
<b>querySelectorAll:</b> querySelectorAll returns all elements that matches the css selector as a NodeList. We can use forEach loop to access element here.
<br>

2. <b>How do you create and insert a new element into the DOM?</b><br>
<b>Ans:</b><br>
We can use document.createElement to a create a new html element. Then we can set attribute and styles to the element. We can also add some classList. We can also add html elements or text inside the created element using innerHTML/innerText. Then we can append the created element to a parent element using appendChild().
<br>
<b>Example: </b>
```js
const card = document.createElement('div');
element.innerText = "This is a card";
cardsContainer.appendChild(element);
```

3.<b> What is Event Bubbling and how does it work?</b><br>
<b>Ans:</b><br>
Event bubbling means an event starts from the element where it happened and then moves up (propagates) to its parent elements until the top of the document.
<b>Example:</b>
```js
<body>
    <div>
        <button>Click here</button>
    </div>
</body>
```
Here clicking the <button> will trigger button click, then div click, and then body click.


4. <b>What is Event Delegation in JavaScript? Why is it useful?</b><br>
<b>Ans:</b><br>
Event Delegation is a technique where we can attach a single event listener to a parent element, and handle events for its child elements using event bubbling. Instead of adding listeners to many elements, we can add one to the parent and detect the target using event.target.
<br>
<b>Usefulness:</b>
<ul>
<li> It saves memory (fewer listeners).</li>
<li> It handles dynamically added elements automatically.</li>
<li> It makes code cleaner, readable and more efficient.</li>
</ul>


5. <b>What is the difference between preventDefault() and stopPropagation() methods?</b><br>
<b>Ans:</b><br>
preventDefault stops the default browser action (like link navigation or form submission).
<br>
stopPropagation stops the event from moving up (bubbling) to parent elements.
