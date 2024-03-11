import java.util.Scanner;

public class JPA205 {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        for (byte i = 0; i < 4; i++) {
            System.out.println("Enter an integer:");
            int number = scn.nextInt();

            if (number % 6 == 0 && number % 3 == 0 && number % 2 == 0) 
                System.out.println(number+"是2, 3, 6的倍數");
            else if (number % 3 == 0)
                System.out.println(number + "是3的倍數");
            else if (number % 2 == 0)
                System.out.println(number + "是2的倍數");
            else
                System.out.println("不是2, 3, 6的倍數");             
        }
        scn.close();
    }
}