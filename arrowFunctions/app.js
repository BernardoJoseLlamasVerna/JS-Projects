/*const sayHello = function () {
    console.log('Hello');
}*/

/*const sayHello = () => {
    console.log('Hello');
}*/

// one line does not need braces:
// const sayHello = () => console.log('Hello');

// one line returns
//const sayHello = () => 'Hello';

// same as above:
/*const sayHello = function() {
    return 'Hello';
}*/

// Return object:
// const sayHello = () => ({msg: 'Hello'});

// Single param does not need parenthesis
//const sayHello = name => console.log(`Hello ${name}`);

// More than one parameter, parenthesis needed:
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// console.log(sayHello('Brad', 'Traversy'));

const users = ['Nathan', 'John', 'William'];

/*const nameLengths = users.map(function (name) {
    return name.length;
});*/

/*const nameLengths = users.map((name) => {
   return name.length;
});*/

const nameLengths = users.map(name => name.length);

console.log(nameLengths);