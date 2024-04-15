/*
* This class creates an airplane.
*
* @author  Kenny Le
* @version 1.0
* @since   2024-04-12
*/

/**
 * This is the class.
*/
public class Airplane {
    /**
     * Uses the airplane's speed.
     *
     * @param speed of the airplane
    */
    private int speed;

    /**
     * Creates the base airplane.
    */
    public Airplane() {
    }

    /**
     * Checks the speed of the airplane.
     *
     * @return the speed of the airplane
    */
    public int getSpeed() {
        return this.speed;
    }

    /**
     * Sets the speed of the airplane.
     *
     * @param newSpeed of the airplane
    */
    public void setSpeed(int newSpeed) {
        this.speed = newSpeed;
    }
}
