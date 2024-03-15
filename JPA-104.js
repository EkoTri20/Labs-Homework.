import java.util.Scanner;

public class JPA104 {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        float x1,y1,x2,y2;

        System.out.print("輸入第1組的x和y座標:");
        x1 = scn.nextInt();
        y1 = scn.nextInt();

        System.out.print("輸入第2組的x和y座標:");
        x2 = scn.nextInt();
        y2 = scn.nextInt();

        float distance = (float)Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        
        System.out.printf("介於(%.2f,%.2f)和(%.2f,%.2f)之間的距離是%.2f", x1, y1, x2, y2, distance);
        System.out.println();
        scn.close();

    }
}   

