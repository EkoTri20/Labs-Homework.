mport java.util.Scanner;

public class J03 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("請輸入三角形第一個邊長:");
        int x = input.nextInt();

        System.out.println("請輸入三角形第二個邊長:");
        int y = input.nextInt();

        System.out.println("請輸入三角形第三個邊長:");
        int z = input.nextInt();

        if (isRightTriangle(x, y, z)) {
            System.out.println("您所輸入的三邊為直角三角形");
        } else {
            System.out.println("您所輸入的三邊不為直角三角形");
        }
    }

    public static boolean isRightTriangle(int x, int y, int z) {
        int max = Math.max(x, Math.max(y, z));
        if (max == x) {
            return x * x == y * y + z * z;
        } else if (max == y) {
            return y * y == x * x + z * z;
        } else {
            return z * z == x * x + y * y;
        }
    }
}