/**
* This program uses a class to generate a lock combo
*
* By:      Kenny Le
* Version: 1.0
* Since:   2024-03-07
*/

import { MrCoxallStack } from './MrCoxallStack'
import { createPrompt } from 'bun-promptx'

// Uses MrCoxallStack
const fruitStack = new MrCoxallStack()
fruitStack.push("apple")
fruitStack.push("banana")
fruitStack.push("cherry")

const colorStack = new MrCoxallStack()
colorStack.push("red")
colorStack.push("green")
colorStack.push("blue")

const dogStack = new MrCoxallStack()
dogStack.push("poodle")
dogStack.push("retriever")
dogStack.push("beagle")

// Shows the fruit stack items
const fruitStackItems = fruitStack.showStack()
console.log("Fruit items:", fruitStackItems)

// Shows the color stack items
const colorStackItems = colorStack.showStack()
console.log("Color items:", colorStackItems)

// Shows the dog stack items
const dogStackItems = dogStack.showStack()
console.log("Dog items: ", dogStackItems)

// Show the program as done
console.log('\nDone.')
