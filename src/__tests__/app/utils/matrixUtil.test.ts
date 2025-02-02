import { rotateMatrixCounterClockwise } from '@/app/utils';

describe('rotateMatrixCounterClockwise', () => {
    it('should rotate a 2x2 matrix counterclockwise', () => {
        const inputMatrix = [
            [1, 2],
            [3, 4],
        ];
        const expectedOutput = [
            [2, 4],
            [1, 3],
        ];
        expect(rotateMatrixCounterClockwise(inputMatrix)).toEqual(expectedOutput);
    });

    it('should rotate a 3x3 matrix counterclockwise', () => {
        const inputMatrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        const expectedOutput = [
            [3, 6, 9],
            [2, 5, 8],
            [1, 4, 7],
        ];
        expect(rotateMatrixCounterClockwise(inputMatrix)).toEqual(expectedOutput);
    });

    it('should rotate a 4x4 matrix counterclockwise', () => {
        const inputMatrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        const expectedOutput = [
            [4, 8, 12, 16],
            [3, 7, 11, 15],
            [2, 6, 10, 14],
            [1, 5, 9, 13],
        ];
        expect(rotateMatrixCounterClockwise(inputMatrix)).toEqual(expectedOutput);
    });

    it('should handle an empty matrix', () => {
        const inputMatrix: number[][] = [];
        const expectedOutput: number[][] = [];
        expect(rotateMatrixCounterClockwise(inputMatrix)).toEqual(expectedOutput);
    });
});
