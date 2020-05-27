"use strict";

const $ = require('jquery');

let sayHello = () => console.log("Hello");

sayHello();
console.log('test')
console.log('numbertwo')


$('body').css('background-color', 'blue');
$('body').html(`<h1>Hello World</h1>`);
$('body').append(`<h2>Aaron</h2>`);
$('body').append(`<h3>Singleterry</h3>`)


