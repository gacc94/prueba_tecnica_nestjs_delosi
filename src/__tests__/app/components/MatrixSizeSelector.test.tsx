import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MatrixSizeSelector from '@/app/components/MatrixSizeSelector';

describe('MatrixSizeSelector', () => {
    const setMatrixSize = jest.fn();
    const setMatrix = jest.fn();
    const setParsedMatrix = jest.fn();
    const setParsedMatrix2 = jest.fn();
    const setError = jest.fn();

    it('renders without crashing', () => {
        const { container } = render(
            <MatrixSizeSelector
                matrixSize={null}
                setMatrixSize={setMatrixSize}
                setMatrix={setMatrix}
                setParsedMatrix={setParsedMatrix}
                setParsedMatrix2={setParsedMatrix2}
                setError={setError}
            />
        );
        expect(container).toBeInTheDocument();
    });

    it('displays the correct label', () => {
        const { getByText } = render(
            <MatrixSizeSelector
                matrixSize={null}
                setMatrixSize={setMatrixSize}
                setMatrix={setMatrix}
                setParsedMatrix={setParsedMatrix}
                setParsedMatrix2={setParsedMatrix2}
                setError={setError}
            />
        );
        expect(getByText(/Tamaño de la matriz/)).toBeInTheDocument();
    });

    it('calls setMatrixSize and other setters with valid input', () => {
        const { getByRole } = render(
            <MatrixSizeSelector
                matrixSize={null}
                setMatrixSize={setMatrixSize}
                setMatrix={setMatrix}
                setParsedMatrix={setParsedMatrix}
                setParsedMatrix2={setParsedMatrix2}
                setError={setError}
            />
        );
        const select = getByRole('combobox');
        fireEvent.change(select, { target: { value: '2' } });
        expect(setMatrixSize).toHaveBeenCalledWith(2);
        expect(setMatrix).toHaveBeenCalled();
        expect(setParsedMatrix).toHaveBeenCalled();
        expect(setParsedMatrix2).toHaveBeenCalled();
        expect(setError).toHaveBeenCalledWith(null);
    });

    it('calls setError with invalid input', () => {
        const { getByRole } = render(
            <MatrixSizeSelector
                matrixSize={null}
                setMatrixSize={setMatrixSize}
                setMatrix={setMatrix}
                setParsedMatrix={setParsedMatrix}
                setParsedMatrix2={setParsedMatrix2}
                setError={setError}
            />
        );
        const select = getByRole('combobox');
        fireEvent.change(select, { target: { value: '' } });
        expect(setError).toHaveBeenCalledWith('Ingrese un tamaño válido para la matriz.');
    });
});
