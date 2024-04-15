
/*
* This program uses classes to make a jet and an airplane
*
* @author  Kenny Le
* @version 1.0
* @since   2024-04-12
*/

/**
* This is the program.
*/
final class FlyTest {

    /**
     * Number, 212.
     */
    static final int FIRSTSPEED = 212;

    /**
     * Number, 844.
     */
    static final int SECONDSPEED = 422;

    /**
     * Number, 4.
     */
    static final int THIRDSPEED = 424;

    /**
     * Number, 5000.
     */
    static final int NUMBER5000 = 5000;

    /**
     * Number, 2.
     */
    static final int NUMBER2 = 2;

    /**
    * Prevent instantiation.
    * Throw an exception IllegalStateException.
    * if this is ever called
    *
    * @throws IllegalStateException if this is ever called
    *
    */
    private FlyTest() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(final String[] args) {

        // Create airplane
        final Airplane biplane = new Airplane();
        biplane.setSpeed(FIRSTSPEED);
        System.out.println(biplane.getSpeed());

        // Create jet
        final Jet boeing = new Jet();
        boeing.setSpeed(SECONDSPEED);
        System.out.println(boeing.getSpeed());
        final int maxCounter = 5;
        final int counter = 0;
        while (counter < maxCounter) {
            boeing.accelerate();
            System.out.println(boeing.getSpeed());
            if (boeing.getSpeed() > NUMBER5000) {
                biplane.setSpeed(biplane.getSpeed() * 2);
            } else {
                boeing.accelerate();
            }
            counter++;
        }
        
        boeing.setSpeed(THIRDSPEED);
        boeing.accelerate();
        System.out.println(boeing.getSpeed());

        // Show the program as done
        System.out.println("\nDone.");
    }
}