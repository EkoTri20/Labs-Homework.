public class JPA506 {
    public static void main(String[] args) {
        int radius = 5;
        double pi = 3.1415926;
        int base = 10;
        int height = 5;
        int length = 5;
        int width = 10;
        System.out.printf("圓形面積為 : %.6f", calCircle(radius, pi));
        System.out.println("");
        System.out.printf("三角形面積為 : %.6f", calTriangle(base, height));
        System.out.println("");
        System.out.printf("長方形面積為 : %d", calRectangle(length, width));
        System.out.println("");
        System.out.printf("此圖形面積為 : %.6f", (calCircle(radius, pi) + calTriangle(base, height) + calRectangle(length, width)));
        System.out.println("");
    }
    static double calCircle(int r, double p){
        return Math.pow(r, 2) * p;
    }
    static double calTriangle(int b, int h){
        return b * h / 2;
    }
    static int calRectangle(int l, int w){
        return l * w;
    }
}