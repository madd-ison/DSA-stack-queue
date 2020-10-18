// Walk through the Queue class in the curriculum 
// and understand it well. Then write a Queue class with its core 
// functions (enqueue(), dequeue()) from scratch.

// Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, 
// and Checkov to the queue.Implement a peek() function outside of the 
// Queue class that lets you take a peek at what the 1st item in the queue is.
// Implement a isEmpty() function outside the Queue class that allows you 
// to check if the queue is empty or not. Implement a display() function outside 
// of the Queue class that lets you display what's in the queue.
// Remove Spock from the queue and display the resulting queue.

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }
}

module.exports = Queue;


const peek = function(q) {
    if (!q.first) {
        return null
    }

    return q.first.value;
}

const isEmpty = function(q) {
    if (!q.first) {
        return true;
    }

    return false;
}

const display = function(q) {
    if (!q.first) {
        return null
    }

    let node = q.first;
    while (node.next) {
        console.log(node.value)
        node = node.next;
    }

    console.log(node.value)
}

function main() {
    let starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    console.log(display(starTrekQ))
}

main();