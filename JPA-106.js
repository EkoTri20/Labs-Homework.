import java.util.Scanner;

public class JPA106 {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        double[] xpoints = {-3.2, -2.1, 0, 2.1};

        for (int i = 0; i < xpoints.length; i++) {
            double y = 3 * (Math.pow(xpoints[i], 3)) + (2 * xpoints[i]) - 1;
            System.out.printf("f(" + xpoints[i] + ") = %.4f", y);
            System.out.println("");
        }
        scn.close();
    }
}