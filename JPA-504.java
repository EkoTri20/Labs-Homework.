import java.util.Scanner;

public class JPA504 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Input the number: ");
        int n = input.nextInt();
        System.out.println("Ans: " + sum2(n));
        input.close();
    }

    public static int sum2(int m) {
        if (m == 1) {
            return 2;
        } else {
            return sum2(m - 1) + 2 * m;
        }
    }
}