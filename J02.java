import java.util.Scanner;

public class J02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        while (true) {
            System.out.println("Input:");
            int m = scanner.nextInt();
            
            if (m == 999) {
                break;
            }
            
            int n = scanner.nextInt();
            
            int gcd = findGCD(m, n);
            System.out.println(gcd);
        }
        
        scanner.close();
    }
    
    public static int findGCD(int a, int b) {
        if (b == 0) {
            return a;
        } else {
            return findGCD(b, a % b);
        }
    }
}