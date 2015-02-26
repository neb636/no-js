<p>
    <img width="1000" src="https://raw.github.com/neb636/no-js/master/no-js.png">
</p>

## Simple jQuery plugin to help with pesky Js problems.
What is great about no-js is that it allows you to deal with Js issues in a
isolated scope using dom elements. If there was a Js issue inside a element with a
 id of #slideshow you could remove all Js for just that dom element and it's
 children. Other plugins trying to solve the same problem are not as specific as
 no-js.

## Installation

Install with [Bower](http://bower.io/):
``bower install --save no-js``

To use no-js in your project simply include the plugin js file in the footer section
 of your HTML file:
```html
<script type="text/javascript" src="js/jquery.no-js.js"></script>
```

## Usage
```javascript

$('#element').noJs();
```

## See It in Action
[no-js example](http://codepen.io/neb636/pen/aejhz)
