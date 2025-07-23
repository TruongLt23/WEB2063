// Bài 8: Làm việc với String
const message = '  Welcome to JavaScript course!  ';
console.log(message.trim());         
console.log(message.toUpperCase());  
console.log(message.includes('JavaScript')); // true

// Bài 9: Default Parameters
function greet(name = 'Guest') {
  console.log(`Hello ${name}`);
}
greet();         
greet('Phát');     

// Bài 10: Value vs Reference
let x = 5;
let y = x;
y++;
console.log('x:', x); // 5
console.log('y:', y); // 6
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 100;
console.log('obj1:', obj1.value); // 100
console.log('obj2:', obj2.value); // 100

// Bài 11: Higher-Order Functions
function calculator(operation) {
  if (operation === 'add') {
    return (a, b) => a + b;
  } else if (operation === 'multiply') {
    return (a, b) => a * b;
  } else {
    return () => 'Invalid';
  }
}
const add = calculator('add');
const multiply = calculator('multiply');
console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6