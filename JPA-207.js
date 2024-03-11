import java.util.Scanner;

public class JPA207 {
    static int[] enterSides(int side1, int side2, int side3){
        int[] sides = new int[3];
        if (side1 >= side2 && side1 >= side3) {
            sides[0] = side1;
            sides[1] = side2;
            sides[2] = side3;
        }
        else if (side2 >= side1 && side2 >= side3){
            sides[0] = side2;
            sides[1] = side1;
            sides[2] = side3;
        }
        else if (side3 >= side1 && side3 >= side2) {
            sides[0] = side3;
            sides[1] = side1;
            sides[2] = side2;
        }
        return sides;
    }

    static boolean isTriangle(int sideC, int sideA, int sideB){
        boolean triangle = false;
        if (sideC == 0 || sideA == 0 || sideB == 0)
            triangle = false;
        else if (sideC <= sideA + sideB)
            triangle = true;
        
        return triangle;
    }
    
    static void triangleType(int sideC, int sideA, int sideB){
        if ((Math.pow(sideA, 2) + Math.pow(sideB, 2) == Math.pow(sideC, 2))) 
            System.out.println("直角三角形");
        
        else if ((Math.pow(sideA, 2) + Math.pow(sideB, 2) < Math.pow(sideC, 2)))
            System.out.println("鈍角三角形");

        else if ((Math.pow(sideA, 2) + Math.pow(sideB, 2) > Math.pow(sideC, 2)))
         System.out.println("銳角三角形");
        
    }
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        for (int i = 0; i < 4; i++) {
            System.out.print("輸入三個整數 : ");

            int firstSide = scn.nextInt();
            int secondSide = scn.nextInt();
            int thirdSide = scn.nextInt();

            int[] orderedSides = enterSides(firstSide, secondSide, thirdSide);
            if (isTriangle(orderedSides[0], orderedSides[1], orderedSides[2]))
                triangleType(orderedSides[0], orderedSides[1], orderedSides[2]);
            else
                System.out.println("不可以構成三角形");
        }

        scn.close();
    }

}