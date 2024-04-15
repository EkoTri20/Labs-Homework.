import java.util.Scanner;

public class JPA503 {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        boolean done = false;
        while (!done) {
            System.out.print("Input m :");
            int m = scn.nextInt();
            if (m == 999)
                done = true;
            else{
                System.out.print("Input n :");
                int n = scn.nextInt();
                System.out.println("最大公因數=" + GCF(m, n));
            }
        }
        scn.close();
    }
    static int GCF(int m, int n){
        int big = Math.max(m, n);
        int gcf = 0;
        for (int i = 1; i < big; i++) {
            if (m % i == 0 && n % i == 0) {
                gcf = i;
            }
        }
        return gcf;
    }
}