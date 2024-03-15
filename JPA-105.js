import java.util.Scanner;

public class JPA105 {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int total = 0;

        System.out.print("請輸入您的姓名:");
        String name = scn.nextLine();
        
        System.out.println("Hi, " + name + ", 請輸入您的銅板的個數:");
        System.out.print("請輸入1元的數量:");
        int ones = scn.nextInt();
        total += ones;

        System.out.print("請輸入5元的數量:");
        int fives = scn.nextInt();
        total += (fives * 5);

        System.out.print("請輸入10元的數量:");
        int tens = scn.nextInt();
        total += (tens * 10);

        System.out.print("請輸入50元的數量:");
        int fiftys = scn.nextInt();
        total += (fiftys * 50);

        String totalString = Integer.toString(total);
        String[] totalArray = totalString.split("");

        System.out.print("您的錢總共有: ");
        System.err.println(totalArray[0] + " 千 " + totalArray[1] + " 百 " + totalArray[2] + " 十 " + totalArray[3] + " 元 ");
        scn.close();



    }
}