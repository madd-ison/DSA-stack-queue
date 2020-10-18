// A stack can be used to ensure that an arithmetic expression has balanced 
// parentheses. Write a function that takes an arithmetic expression as an 
// argument and returns true or false based on matching parenthesis. As a bonus 
// provide a meaningful error message to the user as to what's missing. For 
// example, you are missing a ( or missing a ")".

// For version 1, the parentheses you need to consider are ( and ). 
// Finding a close parenthesis without an open parenthesis is an error 
// (report the location of the close); reaching the end of the string while 
// still "holding" an open parenthesis is also an error (report the 
// location of the open).

// Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. 
// These must be correctly nested; "([)]" is incorrect, and should report an 
// error at the ), stating that you were expecting a ] but found a ). If this 
// is starting to look and sound very familiar, congratulations - you're beginning 
// to write a simple language parser!

// Extension extension exercise: Also recognize 2 types of quote 
// character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, 
// nothing is counted until you reach the corresponding close quote.

const Stack = require('./create-stack')

function checkParentheses(str) {
  let pairs = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      pairs.push([str[i], i]);
    } else if (str[i] === ')') {
      const previous = pairs.pop();
      if (!previous || previous[0] !== '(') {
        return ` Error at position ${i}`
      }
    }
  }
  if (pairs.top) {
    return `Error at position ${pairs.top.data[1]}`
  }
  return true;
}

const str1 = `(1 + (2 * 3))` 
// loop through string
// {abc(de + }fg)}
// if { or (, push to stack,
// if } of ), compare to stack => if the opening pair is found, pop the opening pair from stack
    // if opening pair is not found there is an error at that position

// if stack is not empty, there is an error
// check the top of stack, to record the error
const str2 = `4 * 5 10 / 2)` // false
const str3 = `55 + 11 (8 -1` // false
console.log(checkParentheses(str1))