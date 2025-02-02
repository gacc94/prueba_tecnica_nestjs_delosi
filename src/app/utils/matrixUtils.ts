export const rotateMatrixCounterClockwise = (inputMatrix: number[][]): number[][] => {
    const n = inputMatrix.length;
    const rotated: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[n - j - 1][i] = inputMatrix[i][j];
        }
    }
    return rotated;
};
