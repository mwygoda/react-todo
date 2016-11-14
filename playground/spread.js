// function add (a,b){
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB,3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var person2  =['Jen', 29];

function sayHi(name,age) {

 console.log('Hi ' + name + ' u are ' + age);
}


sayHi(...person);
sayHi(...person2);

var names = ['kris', 'kw'];
var final = ['mati', ...names];

final.forEach(function(name) {
  console.log('hi ' + name);
});
