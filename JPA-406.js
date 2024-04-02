import java.util.Scanner;

public class JPA406 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] parkingHours = {2, 3, 5, 8};

        for (int hours : parkingHours) {
            int parkingFee = calculateParkingFee(hours);
            System.out.println("停車時數:" + hours + "小時");
            System.out.println("應繳費用:" + parkingFee + "元整");
        }

        scanner.close();
    }

    public static int calculateParkingFee(int hours) {
        int fee;
        if (hours <= 2) {
            fee = hours * 30;
        } else if (hours <= 4) {
            fee = 2 * 30 + (hours - 2) * 50;
        } else if (hours <= 6) {
            fee = 2 * 30 + 2 * 50 + (hours - 4) * 80;
        } else {
            fee = 2 * 30 + 2 * 50 + 2 * 80 + (hours - 6) * 100;
        }
        return fee;
    }
}