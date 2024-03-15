public class JPA107 {
    static int action = 1;
    static int skill = 2;
    static int teamGame = 3;
    static void basketball() {
        System.out.println("The Basketball grade is " + (action + skill + teamGame));
    }
    static void baseball() {
        System.out.println("The baseball grade is" + ((skill + 10) + teamGame));
    }
    public static void main(String[] args) {
        basketball();
        baseball();
    }
}