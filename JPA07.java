import java.util.Scanner;

public class JPA07 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int m, n;
        
        while (true) {
            System.out.println("Input:");
            m = scanner.nextInt();
            if (m == 999) {
                break;
            }
            n = scanner.nextInt();
            
            int gcd = calculateGCD(m, n);
            System.out.println(gcd);
        }
        
        scanner.close();
    }
    
    public static int calculateGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
