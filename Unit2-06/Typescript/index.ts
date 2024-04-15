
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

let counter = 0
while (counter < 4) {
  boeing.accelerate()
  console.log(boeing.getSpeed())

  if (boeing.getSpeed() > 5000) {
  // If the speed of the boeing object is greater than NUMBER_5000,
  // double the speed of the biplane object
    biplane.setSpeed(biplane.getSpeed() * 2)
  } else {
    // If the speed of the boeing object is not greater than NUMBER_5000,
    // accelerate the boeing object again
    boeing.accelerate()
  }

  counter++; // Increment the counter
}

boeing.setSpeed(424)
boeing.accelerate()
console.log(boeing.getSpeed())

// Show the program as done
console.log('\nDone.')
