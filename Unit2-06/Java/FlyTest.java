
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
    static final int NUMBER212 = 212;

    /**
     * Number, 844.
     */
    static final int NUMBER844 = 844;

    /**
     * Number, 4.
     */
    static final int NUMBER4 = 4;

    /**
     * Number, 5000.
     */
    static final int NUMBER5000 = 5000;

    /**
     * Number, 2.
     */
    static final int NUMBER2 = 2;

    /**
     * Preven  instantiation.
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
     * The starting calculateBoardFoot() function.
     *
     * @param args using args
     *
     */

    public static void main(String[] args) {
        final Airplane biplane = new Airplane();
        biplane.setSpeed(NUMBER212);
        System.out.println(biplane.getSpeed());
        final Jet boeing = new Jet();
        boeing.setSpeed(NUMBER844);
        System.out.println(boeing.getSpeed());
        int counter = 0;
        while (counter < NUMBER4) {
            boeing.accelerate();
            System.out.println(boeing.getSpeed());
            if (boeing.getSpeed() > NUMBER5000) {
                biplane.setSpeed(biplane.getSpeed() * NUMBER2);
            } else {
                boeing.accelerate();
            }
            counter++;
        }
        System.out.println(biplane.getSpeed());
        System.out.println("\nDone.");
    }
}