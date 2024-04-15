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
  // Creates the base vehicle
  public constructor() {
    super()
  }

  // Sets the speed of the jet
  public setSpeed(newSpeed: number) {
    super.setSpeed(newSpeed * 2)
  }

  // Accelerates the jet, changing speed
  public accelerate() {
    super.setSpeed(this.speed * 2)
  }
}
