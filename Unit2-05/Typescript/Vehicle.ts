/**
* This class creates a vehicle
*
* By:      Kenny Le
* Version: 1.0
* Since:   2024-03-27
*/

export class Vehicle {
  // Class variables

  // Vehicle license plate number
  licensePlateNumber: string
  // Vehicle colour
  private colour: string
  // Number of doors on the vehicle
  private doors: number
  // Current speed of the vehicle
  private speed: number
  // Maximum speed of the vehicle
  private maxSpeed: number

  // Creates the base vehicle
  public constructor(startColour: string, startPlateNumber: string,startDoors: int, startMaxSpeed: number) {
    this.speed = 0
    this.maxSpeed = startMaxSpeed
    this.doors = startDoors
    this.licensePlateNumber = startPlateNumber
    this.colour = startColour
  }

  // Gets the license plate number of the vehicle
  public get licensePlateNumber(): string {
    return this.licensePlateNumber
  }

  // Gets the colour of the vehicle
  public get colour(): string {
    return this.colour
  }

  // Gets the number of doors on the vehicle
  public get doors(): number {
    return this.doors
  }

  // Gets the current speed of the vehicle
  public get speed(): number {
    return this.speed
  }

  // Gets the maximum speed of the vehicle
  public get maxSpeed(): number {
    return this.maxSpeed
  }

  // Creates a string about the status of the car
  public get status(): string {
    let statusString = ` -> Speed: ${this.speed}\n`
    statusString += ` -> MaxSpeed: ${this.maxSpeed}\n`
    statusString += ` -> Number of doors: ${this.doors}\n`
    statusString += ` -> License Plate: ${this.licensePlateNumber}\n`
    statusString += ` -> Color: ${this.colour}`

    return statusString
  }

  // Sets the colour of the vehicle
  public set colour(newColour: string) {
    this.colour = newColour
  }

  // Sets the license plate number of the vehicle
  public set licensePlateNumber(newPlateNumber: string) {
    this.licensePlateNumber = newPlateNumber
  }

  // Accelerates the car, changing the speed
  public accelerate(accelerationPower: number, accelerationTime: number) {
    if (accelerationPower > 0 && accelerationTime > 0) {
      this.speed = (accelerationPower * accelerationTime) + this.speed;
      if (this.speed > this.maxSpeed) {
        this.speed = this.maxSpeed;
      }
  } else {
      console.error("Acceleration power and time must be positive numbers.");
  }
}

  // Brakes the car, changing the speed
  public brake(brakePower: number, brakeTime: number) {
    if (brakePower > 0 && brakeTime > 0) {
      this.speed = this.speed - (brakePower * brakeTime);
      if (this.speed < 0) {
        this.speed = 0;
      }
    } else {
      console.error("Brake power and time must be positive numbers.");
    }
  }
}
