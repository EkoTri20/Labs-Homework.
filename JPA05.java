import java.util.Scanner;

public class JPA05 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < 3; i++) {
            System.out.print("Please enter one value: ");
            int n = scanner.nextInt();

            if (n >= 1 && n <= 10) {
                long factorial = calculateFactorial(n);
                System.out.println(n + "! : " + factorial);
            } else {
                System.out.println("Error, the value is out of range.");
            }
        }

        scanner.close();
    }

    private static long calculateFactorial(int n) {
        long factorial = 1;
        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
    

