public class JPA405 {
    public static void main(String[] args) {
        String[] arr = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J"};

        System.out.print("反轉陣列資料之前: ");
        for (String item : arr) {
            System.out.print(item);
        }
        System.out.println();

        reverseArray(arr);

        System.out.print("反轉陣列資料之後: ");
        for (String item : arr) {
            System.out.print(item);
        }
    }

    public static void reverseArray(String[] arr) {
        int start = 0;
        int end = arr.length - 1;
        String temp;

        while (start < end) {
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}