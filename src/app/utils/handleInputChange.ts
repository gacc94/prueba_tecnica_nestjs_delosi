import { ChangeEvent } from 'react';

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
