import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MatrixInput from '@/app/components/MatrixInput';

describe('MatrixInput', () => {
    const parsedMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    const setParsedMatrix = jest.fn();
    const setParsedMatrix2 = jest.fn();
    const setMatrix = jest.fn();

    it('renders without crashing', () => {
        const { container } = render(
            <MatrixInput
                parsedMatrix={parsedMatrix}
                setParsedMatrix={setParsedMatrix}
                setParsedMatrix2={setParsedMatrix2}
                setMatrix={setMatrix}
            />
        );
        expect(container).toBeInTheDocument();
    });

    it('displays the correct number of input fields', () => {
        const { getAllByRole } = render(
            <MatrixInput
                parsedMatrix={parsedMatrix}
                setParsedMatrix={setParsedMatrix}
                setParsedMatrix2={setParsedMatrix2}
                setMatrix={setMatrix}
            />
        );
        const inputs = getAllByRole('textbox');
        expect(inputs.length).toBe(parsedMatrix.flat().length);
    });

    it('displays the correct values in the input fields', () => {
        const { getByDisplayValue } = render(
            <MatrixInput
                parsedMatrix={parsedMatrix}
                setParsedMatrix={setParsedMatrix}
                setParsedMatrix2={setParsedMatrix2}
                setMatrix={setMatrix}
            />
        );
        parsedMatrix.flat().forEach((num) => {
            expect(getByDisplayValue(num.toString())).toBeInTheDocument();
        });
    });

    it('calls handleInputChange on input change', () => {
        const { getByDisplayValue } = render(
            <MatrixInput
                parsedMatrix={parsedMatrix}
                setParsedMatrix={setParsedMatrix}
                setParsedMatrix2={setParsedMatrix2}
                setMatrix={setMatrix}
            />
        );
        const input = getByDisplayValue('1');
        fireEvent.change(input, { target: { value: '10' } });
        expect(setParsedMatrix).toHaveBeenCalled();
        expect(setMatrix).toHaveBeenCalled();
    });

    it('renders the correct grid layout', () => {
        const { container } = render(
            <MatrixInput
                parsedMatrix={parsedMatrix}
                setParsedMatrix={setParsedMatrix}
                setParsedMatrix2={setParsedMatrix2}
                setMatrix={setMatrix}
            />
        );
        const grid = container.firstChild;
        expect(grid).toHaveStyle(`grid-template-columns: repeat(${parsedMatrix.length}, 50px)`);
    });
});
