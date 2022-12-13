let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const isString = (arr) => arr.every((i) => typeof i === "string");
console.log(isString(fruits));

fruits.forEach((fruit) => {
    console.log(`Does ${fruit} start with "a"? ${fruit.startsWith("a")}`);
});

let result = fruits.filter((fruit) => fruit.startsWith("b") || fruit.startsWith("s"));
console.log(result);
