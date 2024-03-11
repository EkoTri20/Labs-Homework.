import java.util.Scanner;

public class JPA201 {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        for (byte i = 0; i < 2; i++) {
            System.out.println("Please enter score:");
            byte score = scn.nextByte();
            gradeCalculator(score); 
            System.out.println("End");
        }
        scn.close();
    }

    static void gradeCalculator(byte grade) {
        if (grade > 60)
        System.out.println("You Pass");
    }
}