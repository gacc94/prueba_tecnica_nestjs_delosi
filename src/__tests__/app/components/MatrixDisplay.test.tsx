import React from 'react';
import { render } from '@testing-library/react';
import MatrixDisplay from '@/app/components/MatrixDisplay';

describe('MatrixDisplay', () => {
    const parsedMatrix2 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    it('renders without crashing', () => {
        const { container } = render(<MatrixDisplay parsedMatrix2={parsedMatrix2} />);
        expect(container).toBeInTheDocument();
    });

    it('displays the correct number of cells', () => {
        const { getAllByText } = render(<MatrixDisplay parsedMatrix2={parsedMatrix2} />);
        const cells = getAllByText(/^\d+$/);
        expect(cells.length).toBe(parsedMatrix2.flat().length);
    });

    it('displays the correct values in the cells', () => {
        const { getByText } = render(<MatrixDisplay parsedMatrix2={parsedMatrix2} />);
        parsedMatrix2.flat().forEach((num) => {
            expect(getByText(num.toString())).toBeInTheDocument();
        });
    });

    it('applies the correct styles to the grid', () => {
        const { container } = render(<MatrixDisplay parsedMatrix2={parsedMatrix2} />);
        const grid = container.querySelector('.grid');
        expect(grid).toHaveStyle(`grid-template-columns: repeat(${parsedMatrix2.length}, 50px)`);
    });
});
