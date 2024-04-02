import java.util.Scanner;

public class JPA401 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 建立一個長度為10的整數陣列
        int[] numbers = new int[10];

        // 提示用戶輸入10個整數
        System.out.println("請輸入10個整數:");

        // 依次要求用戶輸入10個整數
        for (int i = 0; i < 10; i++) {
            System.out.print("第" + (i + 1) + "個整數: ");
            numbers[i] = scanner.nextInt();
        }

        // 計算大於60的數量、總和和平均值
        int countOver60 = 0;
        int sumOver60 = 0;
        for (int number : numbers) {
            if (number > 60) {
                countOver60++;
                sumOver60 += number;
            }
        }

        // 顯示結果
        System.out.println("陣列中大於60的有" + countOver60 + "個");
        System.out.println("總合為" + sumOver60);
        System.out.println("平均值為" + (double) sumOver60 / countOver60);

        scanner.close();
    }
}