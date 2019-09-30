let re;
re = /hello/;

// i =  case insensitive
re = /hello/i;

// Global search
//re = /hello/g;

/*console.log(re);
console.log(re.source);*/

// exec() : Return result in an array or null--->position of 'hello'
// const result = re.exec('hello world');

/*console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);*/

// test() : Returns true or false searching word we want
/*const result = re.test('Hello');
console.log(result);*/

// match() - Return result array or null
/*const str = 'Hello There';
const result = str.match(re);
console.log(result);*/

// search() : Returns index of the first match if not found retuns -1
/*const str = 'Brad Hello There';
const result = str.search(re);
console.log(result);*/

// replace() - Return new string with some or all matches of a pattern
/*
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);*/
