/*
* This program uses a vehicle class to make three vehicles
*
* @author  Kenny Le
* @version 1.0
* @since   2024-04-04
*/

/**
* This is the program.
*/
final class Main {
    /**
    * Acceleration Power Ford.
    */
    static final double ACCEL_POWER_FORD = 10;

    /**
    * Acceleration Time Ford.
    */
    static final double ACCEL_TIME_FORD = 10;

    /**
    * Acceleration Power Ferrari.
    */
    static final double ACCEL_POWER_FERRARI = 100;

    /**
    * Acceleration Time Ferrari.
    */
    static final double ACCEL_TIME_FERRARI = 4;

    /**
    * Brake Power Ferrari.
    */
    static final double BRAKE_POWER_FERRARI = 10;

    /**
    * Brake Time Ferrari.
    */
    static final double BRAKE_TIME_FERRARI = 10;

    /**
    * Acceleration Power Citroen.
    */
    static final double ACCEL_POWER_CITROEN = 5;

    /**
    * Acceleration Time Citroen
    */
    static final double ACCEL_POWER_CITROEN = 10;

    /**
    * Brake Power Citroen.
    */
    static final double BRAKE_POWER_CITROEN = 2;

    /**
    * Brake Time Citroen.
    */
    static final double BRAKE_TIME_CITROEN = 10;

    /**
    * Prevent instantiation.
    * Throw an exception IllegalStateException.
    * if this is ever called
    *
    * @throws IllegalStateException if this is ever called
    *
    */
    private Main() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(final String[] args) {
        // String texts
        final String statusString = "Status:\n";
        final String speedString = "New speed: ";
        final String colourString = "New color: ";
        final String lineBreak = "\n";

        // Add Ford Focus
        System.out.println("Created Ford focus");
        final Vehicle fordFocus = new Vehicle("white", "B40-C4RR0", 4, 284);
        // Change vehicle
        System.out.println(statusString + fordFocus.getStatus());

        System.out.println("Accelerating, 10 of power for 10 sec.");
        fordFocus.accelerate(ACCEL_POWER_FORD, ACCEL_TIME_FORD);
        System.out.println(speedString + fordFocus.getSpeed());

        System.out.println("Changing colour to black:");
        fordFocus.setColour("black");
        System.out.println(colourString + fordFocus.getColour() + lineBreak);

        // Add Ferrari
        System.out.println("Created a Ferrari");
        final Vehicle ferrari = new Vehicle("red", "VHD-35HU", 2, 320);
        // Change vehicle
        System.out.println(statusString + ferrari.getStatus());
        System.out.println("Accelerating, 100 of power for 4 sec.");
        ferrari.accelerate(ACCEL_POWER_FERRARI, ACCEL_TIME_FERRARI);
        System.out.println(speedString + ferrari.getSpeed());

        System.out.println("Breaking, 10 of power for 10 sec.");
        ferrari.brake(BRAKE_POWER_FERRARI, BRAKE_TIME_FERRARI);
        System.out.println(speedString + ferrari.getSpeed());

        System.out.println("Changing colour to racing red:");
        ferrari.setColour("racing red!");
        System.out.println(colourString + ferrari.getColour() + lineBreak);

        // Add Citroen Ami
        System.out.println("Created a Citroen Ami");
        final Vehicle citroenAmi = new Vehicle("blue", "FS-695-DQ", 2, 45);
        // Change vehicle
        System.out.println(statusString + citroenAmi.getStatus());
        System.out.println("Accelerating, 5 of power for 10 sec.");
        citroenAmi.accelerate(ACCEL_POWER_CITROEN, ACCEL_TIME_CITROEN);
        System.out.println(speedString + citroenAmi.getSpeed());

        System.out.println("Breaking, 2 of power for 10 sec.");
        citroenAmi.brake(BRAKE_POWER_CITROEN, BRAKE_TIME_CITROEN);
        System.out.println(speedString + citroenAmi.getSpeed());

        System.out.println("Changing colour to purple:");
        citroenAmi.setColour("purple");
        System.out.println(colourString + citroenAmi.getColour() + lineBreak);

        // Show the program as done
        System.out.println("\nDone.");
    }
}
