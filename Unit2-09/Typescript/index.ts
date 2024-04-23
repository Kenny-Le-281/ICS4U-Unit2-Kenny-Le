
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

// Test 1
console.log('\nAccelerating the truck with a power of 20 for 10 seconds')
bigTruck.accelerate(20, 10)
console.log(`New speed: ${bigTruck.speed}`)
console.log('Braking the truck with a power of 10, air pressure of 10 for 10 seconds')
bigTruck.brake(10, 10, 10)
console.log(`New speed: ${bigTruck.speed}`)

// Test 2
console.log('\nAccelerating the truck with a power of 30 for 10 seconds')
bigTruck.accelerate(30, 10)
console.log(`New speed: ${bigTruck.speed}`)
console.log('Braking the truck with a power of 2, air pressure of 10 for 10 seconds')
bigTruck.brake(2, 10, 10)
console.log(`New speed: ${bigTruck.speed}`)

// Test 3
console.log('\nBraking the truck with a power of 10, air pressure of 10 for 10 seconds')
bigTruck.brake(10, 10, 10)
console.log(`New speed: ${bigTruck.speed}`)

console.log('\nDone.')