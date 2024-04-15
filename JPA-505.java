public class JPA505 {
    public static void main(String[] args) {
        System.out.println("Adding two integers: 2 , 3");
        System.out.println("Adding two doubles: 5.2 , 4.3");
        System.out.println("Adding two strings: I love , Java!!");
        System.out.printf("%d %.6f %s",add(2, 3), add(5.2, 4.3), add("I love ", "Java!!"));
        System.out.println("");
    }
    static int add(int a, int b){
        return a + b;
    }
    static double add(double a, double b){
        return a + b;
    }
    static String add(String a, String b){
        return a + b;
    }
}