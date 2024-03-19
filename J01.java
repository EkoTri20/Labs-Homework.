mport java.util.Scanner;

public class J01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("請輸入您的姓名:");
        String name = scanner.nextLine();
        System.out.println("\nHi, " + name + ",請輸入您的金額的個數:");

        System.out.print("請輸入5元的數量:");
        int count5 = scanner.nextInt();

        System.out.print("請輸入10元的數量:");
        int count10 = scanner.nextInt();

        System.out.print("請輸入50元的數量:");
        int count50 = scanner.nextInt();

        System.out.print("請輸入100元的數量:");
        int count100 = scanner.nextInt();

        int total = count5 * 5 + count10 * 10 + count50 * 50 + count100 * 100;
        System.out.println("\n您的錢總共有:" + total + "元日元");

        scanner.close();
    }
}