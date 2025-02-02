import { handleKeyDown } from '@/app/utils';
import { KeyboardEvent } from 'react';

describe('handleKeyDown', () => {
    let mockEvent: Partial<KeyboardEvent<HTMLInputElement>>;
    let parsedMatrix: number[][];

    beforeEach(() => {
        mockEvent = {
            key: 'Enter',
            preventDefault: jest.fn(),
        };
        parsedMatrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        document.body.innerHTML = `
            <input data-index="0-0" />
            <input data-index="0-1" />
            <input data-index="0-2" />
            <input data-index="1-0" />
            <input data-index="1-1" />
            <input data-index="1-2" />
            <input data-index="2-0" />
            <input data-index="2-1" />
            <input data-index="2-2" />
        `;
    });

    it('should focus the next input in the same row when Enter is pressed', () => {
        const currentInput = document.querySelector<HTMLInputElement>('input[data-index="0-0"]');
        currentInput?.focus();
        handleKeyDown(mockEvent as KeyboardEvent<HTMLInputElement>, 0, 0, parsedMatrix);
        const nextInput = document.querySelector<HTMLInputElement>('input[data-index="0-1"]');
        expect(document.activeElement).toBe(nextInput);
    });

    it('should focus the first input of the next row when Enter is pressed on the last column', () => {
        const currentInput = document.querySelector<HTMLInputElement>('input[data-index="0-2"]');
        currentInput?.focus();
        handleKeyDown(mockEvent as KeyboardEvent<HTMLInputElement>, 0, 2, parsedMatrix);
        const nextInput = document.querySelector<HTMLInputElement>('input[data-index="1-0"]');
        expect(document.activeElement).toBe(nextInput);
    });

    it('should not throw an error when Enter is pressed on the last input', () => {
        const currentInput = document.querySelector<HTMLInputElement>('input[data-index="2-2"]');
        currentInput?.focus();
        expect(() => handleKeyDown(mockEvent as KeyboardEvent<HTMLInputElement>, 2, 2, parsedMatrix)).not.toThrow();
    });
});
