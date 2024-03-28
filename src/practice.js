const a = 10;

const b = `my current value is ${a}`;

console.log(b);

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

console.log(`Addition of 10 and 5 ==> `, add(10, 5));
console.log(`Subtraction of 10 and 5 ==> `, subtract(10, 5));

const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, I am " + this.name);
  },
};

person.greet();

const { name, age } = person;

console.log(`This is a destructed value =====> Name: ${name}, Age: ${age}`);
