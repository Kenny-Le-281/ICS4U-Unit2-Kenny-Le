/*
* This program uses a vehicle class to make two different vehicles
*
* @author  Kenny Le
* @version 1.0
* @since   2024-04-09
*/

/**
* This is the program.
*/
final class Main {
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
        // Constants
        final double speedMod = 10;
        final double speedModTwo = 15;
        final String newSpeedText = "New speed: ";

        // Add BMX bike
        final Bike bmx = new Bike("Red", 40);
        System.out.println("Created Bmx bike.\nStatus:");
        System.out.println(bmx.getStatus());

        System.out.println("\nSet the cadence to 10");
        bmx.setCadence(speedMod);
        System.out.println(bmx.getStatus());

        System.out.println("\nAccelerate by 15:");
        bmx.accelerate(speedModTwo);
        System.out.println(bmx.getStatus());

        System.out.println("\nRinging bell.");
        bmx.ringBell();

        // Add big truck
        final Truck bigTruck = new Truck("Grey", 200, "HGC-3456F");

        System.out.println("Created a Truck.\nStatus:");
        System.out.println(bigTruck.getStatus());

        System.out.println("\nAccelerating, 10 of power for ten seconds:");
        bigTruck.accelerate(10, 10);
        System.out.println("New speed: " + bigTruck.getSpeed());
        System.out.println("Braking the truck with a power of 10, air pressure of 10 for 10 seconds");
        bigTruck.brake(10, 10, 10);
        System.out.println("New speed: " + bigTruck.getSpeed());

        // Example 2
        System.out.println("\nAccelerating, 20 of power for ten seconds:");
        bigTruck.accelerate(20, 10);
        System.out.println("New speed: " + bigTruck.getSpeed());
        System.out.println("Braking the truck with a power of 4 with air pressure of 10 for 10 seconds");
        bigTruck.brake(4, 10, 10);
        System.out.println("New speed: " + bigTruck.getSpeed());

        // Example 3
        System.out.println("\nAccelerating, 30 of power for ten seconds:");
        bigTruck.accelerate(30, 10);
        System.out.println("New speed: " + bigTruck.getSpeed());
        System.out.println("Braking the truck with a power of 8 with air pressure of 10 for 10 seconds");
        bigTruck.brake(8, 10, 10);
        System.out.println("New speed: " + bigTruck.getSpeed());

        // Show the program as done
        System.out.println("\nDone.");
    }
}
