
/*
* This class creates a jet which is a type of airplane.
*
* @author  Kenny Le
* @version 1.0
* @since   2024-04-12
*/

/**
 * This is the class.
*/
public class Jet extends Airplane {
    /**
     * Sets the jet's speed multiplier.
    */
    private static int multiplier = 2;

    /**
     * Creates the base jet.
    */
    public Jet() {
        super();
    }

    /**
     * Sets the speed of the jet.
     *
     * @param newSpeed of the jet
    */
    public void setSpeed(int newSpeed) {
        super.setSpeed(newSpeed * Jet.MULTIPLIER);
    }

    /**
     * Accelerates the jet, changing speed.
    */
    public void accelerate() {
        super.setSpeed(this.getSpeed() * Jet.MULTIPLIER);
    }
}
