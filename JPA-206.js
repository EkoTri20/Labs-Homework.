import java.util.Scanner;

public class JPA206 {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        byte criteria = 60;
        String mathFail = "Math Failed";
        String chineseFail = "Chinese Failed";
        String englishFail = "English Failed";

        for (byte i = 0; i < 4; i++) {
            System.out.print("Input Chinese Score: ");
            byte chineseScore = scn.nextByte();

            System.out.print("Input English Score: ");
            byte englishScore = scn.nextByte();

            System.out.print("Input Math Score: ");
            byte mathScore = scn.nextByte();

            if (chineseScore > criteria && englishScore > criteria && mathScore > criteria)
                System.out.println("All Pass");
            else if (chineseScore < criteria && englishScore < criteria && mathScore < criteria) {
                System.out.println(chineseFail);
                System.out.println(englishFail);
                System.out.println(mathFail);
            }
            else if (chineseScore < criteria && englishScore < criteria){
                System.out.println(chineseFail);
                System.out.println(englishFail);
            }
            else if (chineseScore < criteria && mathScore < criteria) {
                System.out.println(chineseFail);
                System.out.println(mathFail);
            }
            else if (englishScore < criteria && mathScore < criteria){
                System.out.println(englishFail);
                System.out.println(mathFail);
            }
            else if (chineseScore < criteria)
                System.out.println(chineseFail);
            else if (englishScore < criteria)
                System.out.println(englishFail);
            else if (mathScore < criteria)
                System.out.println(mathFail);
        }
        scn.close();
    }
}