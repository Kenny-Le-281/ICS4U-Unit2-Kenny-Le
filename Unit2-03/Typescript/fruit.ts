/**
* This program uses the MrCoxallStack
*
* By:      Kenny Le
* Version: 1.0
* Since:   2024-03-22
*/

import { MrCoxallStack } from './MrCoxallStack'

const fruitStack = new MrCoxallStack()

// Checksize of stack
const fruitStackSize = fruitStack.size()
console.log("The size of the stack is: ", fruitStackSize)

// Check boolean is empty
const booleanCheck = fruitStack.isEmpty()
console.log("Is the stack empty? ", booleanCheck)

// Print fruit items
fruitStack.push("apple")
fruitStack.push("banana")
fruitStack.push("cherry")
console.log("Fruit items: ", fruitStack.showStack())

// Shows the popped item and new list
const topFruit = fruitStack.pop()
console.log("Pop fruit item: ", topFruit)
console.log("Fruit items: ", fruitStack.showStack())
console.log()

// Checksize of stack
console.log("The size of the stack is: ", fruitStackSize)

// Check boolean is empty
console.log("Is the stack empty? ", booleanCheck)

// Show the program as done
console.log('\nDone.')
