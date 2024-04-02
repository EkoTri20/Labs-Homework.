import java.util.Scanner;

public class JPA06 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int m = 0, n = 0;
        
        while (true) {
            System.out.println("Input:");
            m = scanner.nextInt();
            
            if (m == 999) {
                break;
            }
            
            n = scanner.nextInt();
            System.out.println(power(m, n));
        }
        
        scanner.close();
    }
    
    public static long power(int base, int exponent) {
        long result = 1;
        
        for (int i = 0; i < exponent; i++) {
            result *= base;
        }
        
        return result;
    }
}