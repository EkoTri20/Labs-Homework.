import java.util.Scanner;

public class JPA401 {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int[] numberArray = new int[11];
        int listTotal = 0;
        int listCount = 0;
        System.out.println("請輸入10個整數:");
        for (int i = 1; i < numberArray.length; i++) {
            System.out.print("第"+ i +"個整數:");
            numberArray[i] = scn.nextInt();
            if (numberArray[i] > 60){
                listTotal += numberArray[i];
                listCount++;
            }
        }
        System.out.println("陣列中大於60的有" + listCount + "個");
        System.out.println("綜合為" + listTotal);
        System.out.printf("平均值為%f",  ((double)listTotal / listCount));
        System.out.println("");
        scn.close();

    }

    
}
