"use strict";
class Queue {
    constructor() {
        this.data = [];
    }
    enqueue(item) {
        this.data.push(item);
    }
    dequeue() {
        return this.data.shift();
    }
    size() {
        return this.data.length;
    }
}
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.dequeue();
console.log(queue.size());
