import { handleInputChange } from '@/app/utils';
import { ChangeEvent } from 'react';

describe('handleInputChange', () => {
    it('should update the matrix with the new value', () => {
        const e = {
            target: { value: '12' },
        } as ChangeEvent<HTMLInputElement>;
        const rowIndex = 0;
        const colIndex = 1;
        const parsedMatrix = [
            [0, 0],
            [0, 0],
        ];
        const setParsedMatrix = jest.fn();
        const setMatrix = jest.fn();

        handleInputChange(e, rowIndex, colIndex, parsedMatrix, setParsedMatrix, setMatrix);

        expect(setParsedMatrix).toHaveBeenCalledWith([
            [0, 12],
            [0, 0],
        ]);
        expect(setMatrix).toHaveBeenCalledWith(
            JSON.stringify([
                [0, 12],
                [0, 0],
            ])
        );
    });

    it('should handle non-numeric input by setting the value to 0', () => {
        const e = {
            target: { value: 'abc' },
        } as ChangeEvent<HTMLInputElement>;
        const rowIndex = 0;
        const colIndex = 1;
        const parsedMatrix = [
            [0, 0],
            [0, 0],
        ];
        const setParsedMatrix = jest.fn();
        const setMatrix = jest.fn();

        handleInputChange(e, rowIndex, colIndex, parsedMatrix, setParsedMatrix, setMatrix);

        expect(setParsedMatrix).toHaveBeenCalledWith([
            [0, 0],
            [0, 0],
        ]);
        expect(setMatrix).toHaveBeenCalledWith(
            JSON.stringify([
                [0, 0],
                [0, 0],
            ])
        );
    });

    it('should limit the input to two digits', () => {
        const e = {
            target: { value: '123' },
        } as ChangeEvent<HTMLInputElement>;
        const rowIndex = 0;
        const colIndex = 1;
        const parsedMatrix = [
            [0, 0],
            [0, 0],
        ];
        const setParsedMatrix = jest.fn();
        const setMatrix = jest.fn();

        handleInputChange(e, rowIndex, colIndex, parsedMatrix, setParsedMatrix, setMatrix);

        expect(setParsedMatrix).toHaveBeenCalledWith([
            [0, 12],
            [0, 0],
        ]);
        expect(setMatrix).toHaveBeenCalledWith(
            JSON.stringify([
                [0, 12],
                [0, 0],
            ])
        );
    });
});
