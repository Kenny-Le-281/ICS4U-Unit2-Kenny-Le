/*
* This program creates different types of vehicles
*
* @author  Kenny Le
* @version 1.0
* @since   2024-04-15
*/

import { Bike } from "./Bike"
import { Truck } from "./Truck"
//import { Vehicle } from "./Vehicle"

// Create a big truck
const bigTruck = new Truck('Grey', 200, 'HGC-3456F')
console.log(`\nCreated a Big Truck.\nStatus:\n${bigTruck.status}`)

// Create a bmx bike
const bmxBike = new Bike('Red', 40)
console.log(`\nCreated a BMX Bike.\nStatus:\n${bmxBike.status}`)

// Create a car
// This will not work as Vehicle is an abstract class
//const car = new Vehicle("Blue", 100, 4)
//console.log(`\nCreated a Car.\nStatus\n${car.status}`)

console.log('\nDone.')
