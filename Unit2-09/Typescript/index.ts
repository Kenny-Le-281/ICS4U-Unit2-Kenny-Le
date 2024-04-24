
/*
* This program is a vehicle class.
*
* @author  Kenny Le
* @version 1.0
* @since   2024-04-12
*/

import { Truck } from "./Truck"
import { Bike } from "./Bike"

const bmx = new Bike('Red', 40)

console.log('Created Bmx bike.\nStatus:')
console.log(bmx.status)

console.log('\nSet the cadence to 10')
bmx.cadence = 10
bmx.speed = 20
console.log(bmx.status)

console.log('\nAccelerate by 15:')
bmx.accelerate(15)
console.log(bmx.status)

console.log('\nRinging bell.')
bmx.ringBell()

const bigTruck = new Truck('Grey', 200, 'HGC-3456F')

console.log('Created a Truck.\nStatus:')
console.log(bigTruck.status)

// Example 1
console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)
console.log('Braking the truck with a power of 10, air pressure of 10 for 10 seconds')
bigTruck.brake(10, 10, 10)
console.log('New speed: ' + bigTruck.speed)

// Example 2
console.log('\nAccelerating, 20 of power for ten seconds:')
bigTruck.accelerate(20, 10)
console.log('New speed: ' + bigTruck.speed)
console.log('Braking the truck with a power of 4 with air pressure of 10 for 10 seconds')
bigTruck.brake(4, 10, 10)
console.log('New speed: ' + bigTruck.speed)

// Example 3
console.log('\nAccelerating, 20 of power for ten seconds:')
bigTruck.accelerate(20, 10)
console.log('New speed: ' + bigTruck.speed)
console.log('Braking the truck with a power of 8 with air pressure of 10 for 10 seconds')
bigTruck.brake(8, 10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nDone.')