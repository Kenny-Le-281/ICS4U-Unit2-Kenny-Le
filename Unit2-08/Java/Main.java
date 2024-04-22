
/*
* This program uses a vehicle class to make two different vehicles
*
* @author  Kenny Le
* @version 1.0
* @since   2024-04-09
*/

/**
* This program uses the vehicle class
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

        // Add big truck
        final Truck bigTruck = new Truck("Grey", 200, "HGC-3456F");
        System.out.println("Created a Big Truck.\nStatus:");
        System.out.println(bigTruck.getStatus());

        // Add small truck
        final Truck smallTruck = new Truck("Black", 100, "CDA-3214F");
        System.out.println("Created a Small Truck.\nStatus:");
        System.out.println(smallTruck.getStatus());

        // Show the program as done
        System.out.println("\nDone.");
    }
}