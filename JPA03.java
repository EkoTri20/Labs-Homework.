public class JPA03 {
    public static void main(String[] args) {
        int limit = 1000;
        System.out.println("執行結果如下：");
        System.out.println("1~" + limit + "中的完美數有:");
        findPerfectNumbers(limit);
    }

    public static void findPerfectNumbers(int limit) {
        for (int i = 2; i <= limit; i++) {
            if (isPerfect(i)) {
                System.out.print(i + "\t");
            }
        }
    }

    public static boolean isPerfect(int num) {
        int sum = 1; // 1是所有數的因數，所以初始值為1
        for (int i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }
        return sum == num;
    }
}
