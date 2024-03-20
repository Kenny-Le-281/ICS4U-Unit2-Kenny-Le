/**
* This program uses a class to generate a lock combo
*
* By:      Kenny Le
* Version: 1.0
* Since:   2024-03-07
*/

import { MrCoxallStack } from './MrCoxallStack'
import { createPrompt } from 'bun-promptx'

const mrCoxallStack = new MrCoxallStack()

for (let counter = 0; counter < 3; counter++) {
// String value
  const string = createPrompt('Enter a string: ')

  const stringValue = string.value
  mrCoxallStack.push(stringValue)
}

// Show the stack's value
const stackItems = mrCoxallStack.showStack()
console.log('Lock Combo: ', stackItems)

// Show the program as done
console.log('\nDone.')
