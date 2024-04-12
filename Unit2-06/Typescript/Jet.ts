/**
*
* This class creates a jet which is a type of airplane
*
* By:      Kenny Le
* Version: 1.0
* Since:   2024-04-12
*/

import { Airplane } from './Airplane'

export class Jet extends Airplane {
  // Class variables
  private MULTIPLIER = 2 // Speed multiplier

  // Creates the base vehicle
  public constructor() {
    super()
  }

  // Sets the speed of the jet
  public setSpeed(newSpeed: number) {
    super.setSpeed(newSpeed * this.MULTIPLIER)
  }

  // Accelerates the jet, changing speed
  public accelerate() {
    super.setSpeed(this.speed * 2)
  }
}