// Write a program to sort a stack such that the smallest items are on 
// the top (in ascending order). You can use an additional stack, but you 
// may not use any other data structure (such as an array, or linked list).

const Stack = require('./create-stack')


const sort = function(stack) {
    let temp = new Stack();

    while (stack.top) {
        let node = stack.pop();

        while (temp.top && (node > temp.top.data)) {
            let smallNode = temp.pop();
            stack.push(smallNode);
        } 

        temp.push(node);
    }
    return temp;
}

let sorted = new Stack();

sorted.push(66);
sorted.push(1);
sorted.push(100);
sorted.push(7);
sorted.push(44);
sorted.push(8);

console.log(sort(sorted));