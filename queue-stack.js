// There are many ways to implement a queue. You have learned using singly 
// linked list, and doubly linked list. Keeping the concept of a queue in mind, 
// implement a queue using 2 stacks and no other data structure. (You are not 
//     allowed to use a doubly linked list or array. Use your stack implementation 
//     with a linked list from above to solve this problem.)

const Stack = require('./create-stack');

class Queue {
    constructor() {
        this.in = new Stack();
        this.out = new Stack();
    }

    enqueue(data) {
        while (this.out.top) {
            let node = this.out.pop();
            this.in.push(node);
        }
        
        this.in.push(data);
    }

    dequeue() {
       while (this.in.top) {
           let node = this.in.pop();
           this.out.push(node);
       }

       return this.out.pop();
   }
}

function main() {
    let starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    console.log(starTrekQ.dequeue(), starTrekQ.dequeue())
}

main();