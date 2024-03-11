import java.util.Scanner;

public class JPA204 {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        for (byte i = 0; i < 2; i++) {
            System.out.println("Input:");
            int number = scn.nextInt();
            if (number % 9 == 0 && number % 5 == 0)
                System.out.println("Yes");
            else
                System.out.println("No");
        }
        scn.close();
    }
    
}