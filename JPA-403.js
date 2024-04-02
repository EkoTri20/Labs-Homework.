public class JPA403 {
    public static void main(String[] args) {
        int[][] A = {{1, 2, 3}, {4, 5, 6}};
        int[][] B = {{7, 8, 9}, {10, 11, 12}};

        // 初始化矩陣C，用於存放結果
        int[][] C = new int[A.length][A[0].length];

        // 計算矩陣A與B的和，並將結果存入矩陣C
        for (int i = 0; i < A.length; i++) {
            for (int j = 0; j < A[0].length; j++) {
                C[i][j] = A[i][j] + B[i][j];
            }
        }

        // 顯示矩陣A的內容
        System.out.println("陳列A的內容為(3x3):");
        displayMatrix(A);

        // 顯示矩陣B的內容
        System.out.println("陳列B的內容為(3x3):");
        displayMatrix(B);

        // 顯示矩陣C的內容
        System.out.println("陣列A+B=C，陣列C的內容為(3x3):");
        displayMatrix(C);
    }

    // 顯示矩陣的內容
    public static void displayMatrix(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}