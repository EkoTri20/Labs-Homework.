import java.util.Scanner;

public class JPA04 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double total = 0;
        int count = 0;

        System.out.print("Please enter meal dollars or enter -1 to stop: ");
        double mealCost = scanner.nextDouble();

        while (mealCost != -1) {
            total += mealCost;
            count++;

            System.out.print("Please enter meal dollars or enter -1 to stop: ");
            mealCost = scanner.nextDouble();
        }

        if (count > 0) {
            double average = total / count;
            System.out.printf("餐點總費用: %.2f%n", total);
            System.out.printf("共 %d 道餐點平均費用為: %.2f%n", count, average);
        } else {
            System.out.println("您尚未輸入任何餐點費用。");
        }
    }
}


