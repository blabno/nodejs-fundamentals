console.log('Hello world!');

console.log('1 + 2 =', 1 + 2);

console.log('.1 + .2 =', .1 + .2);

console.log('1 + \'2\' =', 1 + '2');


var a;
var b = 1;
b = 2;
const c = 3;
//c = 3; // TypeError: Assignment to constant variable.
let d = 4;
d = {
  name: 'John',
  age: 18
};

console.log('a:', a);
console.log('a == null', a == null);
console.log('a === null', a === null);
console.log('a == undefined', a == undefined);
console.log('a === undefined', a === undefined);
console.log('b:', b);
console.log('c:', c);
console.log('d:', d);
console.log('console.log', console.log);
//console.log('console', console); // Try logging the whole console object

function sum(a, b) {
  return a + b;
}

console.log('sum', sum);
console.log('sum(1,2)', sum(1, 2));

//console.log(process);
console.log('process.platform', process.platform);
console.log('process.argv', process.argv);
console.log('process.env', process.env);
console.log('Hello World!');
