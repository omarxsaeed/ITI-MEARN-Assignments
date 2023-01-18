class Queue<T> {
    private data: T[] = [];

    enqueue(item: T) {
        this.data.push(item);
    }
    dequeue(): T | undefined {
        return this.data.shift();
    }
    size(): number {
        return this.data.length;
    }
}

const queue = new Queue<number>();

queue.enqueue(5);
queue.enqueue(6);
queue.dequeue();
console.log(queue.size());
