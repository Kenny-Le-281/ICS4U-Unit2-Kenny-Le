
/**
*
* This program uses a basic class to make an array of strings
*
* By:      Kenny Le
* Version: 1.0
* Since:   2024-04-12
*/

import { Airplane } from './Airplane'
import { Jet } from './Jet'

// Create airplane
const biplane = new Airplane()
biplane.setSpeed(212)
console.log(biplane.getSpeed())

// Create jet
const boeing = new Jet()
boeing.setSpeed(422)
console.log(boeing.getSpeed())
for (let counter = 0; counter < 5; counter++) {
  boeing.accelerate()
  console.log(boeing.getSpeed())
}
boeing.setSpeed(424)
boeing.accelerate()
console.log(boeing.getSpeed())

// Show the program as done
console.log('\nDone.')
