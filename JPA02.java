import java.util.Scanner;
public class JPAO2 {
    public static void main(String[] args) {
        int count = 0;

        // Outer loop
        for (int i = 1; i <= 3; i++) {
            // Inner loop
            for (int j = 1; j <= 9; j++) {
                count += 3; // Increment count by 3 each time
            }
        }

        // Output the result
        System.out.println("count = " + count);
    }
}
