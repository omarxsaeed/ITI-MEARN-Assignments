function* fib1(num) {
    let [a, b] = [0, 1];

    for (let i = 0; i < num; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let numElements = prompt("How many Fibonacci series elements do you want displayed?");

var fib1 = fib1(parseInt(numElements));
console.log(fib1);

for (const iterator of fib1) {
    console.log(iterator);
}

console.log("-----------------------------------------------------------");

function* fib2(maxFib) {
    let [a, b] = [0, 1];

    while (a <= maxFib) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let maxFib = prompt("What's the maximum number of Fibonacci series do you want displayed?");

var fib2 = fib2(parseInt(maxFib));

for (const iterator of fib2) {
    console.log(iterator);
}
