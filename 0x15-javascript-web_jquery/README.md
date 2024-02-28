# JavaScript - Web jQuery

# General


* Why JQuery make front-end programming so easy

    JQuery provides a simple and concise syntax for common JavaScript tasks, such as DOM manipulation, event handling, and AJAX requests. It abstracts away many of the complexities of JavaScript, making it easier for developers to write code that works consistently across different browsers. Additionally, JQuery's extensive plugin ecosystem offers solutions for various common tasks, further reducing development time.

* How to select HTML elements in JavaScript

    In vanilla JavaScript, you can select HTML elements using methods like document.getElementById, document.getElementsByClassName, document.getElementsByTagName, or document.querySelector. These methods allow you to select elements based on their ID, class, tag name, or CSS selectors respectively.
How to select HTML elements with JQuery

* How to select HTML elements with JQuery:

    JQuery simplifies element selection with its $() function. You can select elements using selectors similar to CSS syntax. For example:

    $('#myElement') selects an element by ID.
    
    $('.myClass') selects elements by class.
    
    $('div') selects all <div> elements.
    
    $('selector') selects elements using any valid CSS selector.

* What are differences between ID, class and tag name selectors

    * ID selectors (#id) select a single element by its unique identifier.
    
    * Class selectors (.class) select one or more elements by their class attribute.
    
    * Tag name selectors (tag) select one or more elements by their HTML tag name.

* How to modify an HTML element style

    You can modify an element's style using JavaScript by accessing its style property and setting individual style properties. With JQuery, you can use the css() method. For example:

    ```bash
    // JavaScript
    document.getElementById('myElement').style.color = 'red';

    // JQuery
    $('#myElement').css('color', 'red');

    ```

How to get and update an HTML element content

How to modify the DOM

How to make a GET request with JQuery Ajax

How to make a POST request with JQuery Ajax

How to listen/bind to DOM events
