/**
* This class defines a string stack
*
* By:      Kenny Le
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
  
    // Getter for stackAsList
    get stackAsList() {
      return this._stackAsList
    }
  
    // Pushes the values to the stack
    public push(stringPushed: string) {
      this.stackAsList.push(stringPushed)
    }
  
    // pop the value from the stack
    public pop() {
      let returnValue: string = ""
      if (this.stackAsList.length > 0) {
        let topItem = this.stackAsList[this.stackAsList.length - 1]
        this.stackAsList.length = this.stackAsList.length - 1
        returnValue = topItem
      } else {
        returnValue = "The stacks is empty!"
      }
  
      return returnValue
    }
  
    // Returns the stack
    public showStack() {
      let stackItems = this.stackAsList[0]
  
      for (let counter = 1; counter < this.stackAsList.length; counter++) {
        stackItems = stackItems + ", " + this.stackAsList[counter]
      }
  
      return stackItems
    }
  }
  
  