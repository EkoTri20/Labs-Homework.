import java.util.Scanner;

public class JPA208 {
    static void gradeScheme(int grade) {
        if (grade >= 90)
            System.out.println("Your grade is A");
        else if (grade >= 80)
            System.out.println("Your grade is B");
        else if (grade >= 70)
            System.out.println("Your grade is C");
        else if (grade >= 60)
            System.out.println("Your grade is D");
        else
            System.out.println("Your grade is F");
    }

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        for (byte i = 0; i < 5; i++) {
            System.out.println("Input:");
            gradeScheme(scn.nextInt());
        }
        scn.close();
    }
}