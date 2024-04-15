import java.util.Scanner;

public class JPA501 {
    public static void main(String[] args) {
        boolean done = false;
        Scanner scn = new Scanner(System.in);
        while (!done) {
            System.out.print("Input n (0<=n<=16):");
            int n = scn.nextInt();
            if (n == 999){
                done = true;
            }
            else                
            System.out.println(n + "的階乘 = " + fac(n));
        }
        scn.close();
    }
    static int fac(int i){
        if (i == 0)
            return 1;
        else
            return i * fac(i - 1);
    }
}