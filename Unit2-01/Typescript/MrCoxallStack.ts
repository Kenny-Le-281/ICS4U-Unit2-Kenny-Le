/**
* This class creates a list of strings
*
* By:      Kenny LE
* Version: 1.0
* Since:   2024-03-07
*/

export class MrCoxallStack {
  // Stack that contains all of the string
  private stackAsList: string[]

  // Creates the stack
  public constructor() {
    this.stackAsList = []
  }

  // Pushes the strings to the stack
  public push(string: string) {
    this.stackAsList.push(string)
  }

  // Prints the stack to the console
  public showStack() {
    let stackItems = this.stackAsList[0]

    for (let counter = 1; counter < this.stackAsList.length; counter++) {
      stackItems = stackItems + ", " + this.stackAsList[counter]
    }

    return stackItems
  }
}
