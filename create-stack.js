// create a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class Stack {
    // start with an empty stack
    constructor() {
        this.top = null
    }
    push(data) {
        // if stack is empty, new node is top
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }
        // if there is data in the stack
        // create a new node, add data
        // pointer points to top
        const node = new _Node(data, this.top)
        this.top = node
    }
    pop() {
        // point pointer to next item 
        // that item becomes the top
        const node = this.top
        this.top = node.next
        return node.data
    }
}
module.exports = Stack

function main() {
    let starTrek = new Stack()

    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')
    console.log(starTrek)
}

main()

