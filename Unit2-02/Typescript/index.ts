/**
* This program uses the MrCoxallStack
*
* By:      Kenny Le
* Version: 1.0
* Since:   2024-03-22
*/

import { MrCoxallStack } from './MrCoxallStack'

// Uses MrCoxallStack
const fruitStack = new MrCoxallStack()
fruitStack.push("apple")
fruitStack.push("banana")
fruitStack.push("cherry")

// Shows the fruit stack items
console.log("Fruit items: ", fruitStack.showStack())

const topFruit = fruitStack.pop()

// Shows the popped item and new list
console.log("Pop fruit item: ", topFruit)
console.log("Fruit items: ", fruitStack.showStack())
console.log()

const colorStack = new MrCoxallStack()
colorStack.push("red")
colorStack.push("green")
colorStack.push("blue")

// Shows the color stack items
console.log("Color items: ", colorStack.showStack())

const topColor = colorStack.pop()

// Shows the popped item and new list
console.log("Pop color item: ", topColor)
console.log("Color items: ", colorStack.showStack())
console.log()

const dogStack = new MrCoxallStack()
dogStack.push("poodle")
dogStack.push("retriever")
dogStack.push("beagle")

// Shows the dog stack items
console.log("Dog items: ", dogStack.showStack())

const topDog = dogStack.pop()

// Shows the popped item and new list
console.log("Pop dog item: ", topDog)
console.log("Dog items: ", dogStack.showStack())

// Show the program as done
console.log('\nDone.')
