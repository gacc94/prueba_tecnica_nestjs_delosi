import { ChangeEvent, KeyboardEvent } from 'react';

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

export const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    colIndex: number,
    parsedMatrix: number[][],
    setParsedMatrix: (matrix: number[][]) => void,
    setMatrix: (matrix: string) => void
) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 2);
    const newMatrix = [...parsedMatrix];
    newMatrix[rowIndex][colIndex] = parseInt(newValue, 10) || 0;
    setParsedMatrix(newMatrix);
    setMatrix(JSON.stringify(newMatrix));
};

export const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    rowIndex: number,
    colIndex: number,
    parsedMatrix: number[][]
) => {
    if (e.key === 'Enter') {
        const totalColumns = parsedMatrix[0].length;
        const nextColIndex = (colIndex + 1) % totalColumns;
        const nextRowIndex = nextColIndex === 0 ? rowIndex + 1 : rowIndex;
        const nextInput = document.querySelector<HTMLInputElement>(
            `input[data-index="${nextRowIndex}-${nextColIndex}"]`
        );
        nextInput?.focus();
    }
};
