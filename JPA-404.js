public class JPA404 {
    public static void main(String[] args) {
        int[] fibonacci = new int[10];
        fibonacci[0] = 0;
        fibonacci[1] = 1;

        for (int i = 2; i < fibonacci.length; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }

        for (int num : fibonacci) {
            System.out.println(num);
        }
    }
}