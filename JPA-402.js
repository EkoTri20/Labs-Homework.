import java.util.Scanner;

public class JPA402 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("請輸入學生人數: ");
            int numStudents = scanner.nextInt();

            double[] scores = new double[numStudents];
            double total = 0;

            for (int i = 0; i < numStudents; i++) {
                System.out.print("【第" + (i + 1) + "個學生的成績: ");
                scores[i] = scanner.nextDouble();
                total += scores[i];
            }

            double average = total / numStudents;

            System.out.println("人數: " + numStudents);
            System.out.println("總分: " + total);
            System.out.println("平均: " + average);

            // 清除緩衝區
            scanner.nextLine();
        }
    }
}