
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
        final int firstSpeed = 212;
        biplane.setSpeed(firstSpeed);
        System.out.println(biplane.getSpeed());

        // Create jet
        final Jet boeing = new Jet();
        final int secondSpeed = 422;
        boeing.setSpeed(secondSpeed);
        System.out.println(boeing.getSpeed());
        int counter = 0;
        while (counter < 5) {
            boeing.accelerate();
            System.out.println(boeing.getSpeed());
            if (boeing.getSpeed() > 5000) {
                biplane.setSpeed(biplane.getSpeed() * 2);
            } else {
                boeing.accelerate();
            }
            counter++;
        }
        System.out.println(boeing.getSpeed());
        // final int maxLoops = 5;
        // for (int counter = 0; counter < maxLoops; counter++) {
        //     boeing.accelerate();
        //     System.out.println(boeing.getSpeed());
        // }
        // final int thirdSpeed = 424;
        // boeing.setSpeed(thirdSpeed);
        // boeing.accelerate();
        // System.out.println(boeing.getSpeed());

        // Show the program as done
        System.out.println("\nDone.");
    }
}
