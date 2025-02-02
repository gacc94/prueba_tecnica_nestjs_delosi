import { KeyboardEvent } from 'react';

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
