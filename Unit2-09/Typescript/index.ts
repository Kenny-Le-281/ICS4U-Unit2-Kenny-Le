
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

// Create a big truck
const bigTruck = new Truck('Grey', 200, 'HGC-3456F')
console.log('\nCreated a Big Truck.\nStatus:')
console.log(bigTruck.status)

console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nBreaking of power 10, for 2 sec, Air pressure of 2:')
bigTruck.break(10, 2, 2)
console.log('New speed: ' + bigTruck.speed)

console.log('\nDone.')