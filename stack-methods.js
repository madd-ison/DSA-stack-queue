const Stack = require('./create-stack')

// look at top of stack without removing it
const peek = function(stack) {
    return stack.top.data
}

const isEmpty = function(stack) {
    if (!stack.top) {
        return true
    }
    return false
}

const display = function(stack) {
    if(!stack.top) {
        return null
    }
    let currentNode = stack.top
    let nextNode = stack.top
    while (nextNode) {
        currentNode = nextNode
        nextNode = currentNode.next
    }
}

function main() {
    let starTrek = new Stack()

    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')

    starTrek.pop()
}

main()