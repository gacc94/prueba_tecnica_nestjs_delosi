import React from 'react';

interface MatrixDisplayProps {
    parsedMatrix2: number[][];
}

const MatrixDisplay: React.FC<MatrixDisplayProps> = ({ parsedMatrix2 }) => {
    return (
        <div className="mt-6 p-8 bg-gray-800 rounded-lg shadow-2xl w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Matriz Rotada:</h2>
            <div
                className="grid justify-center"
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${parsedMatrix2.length}, 50px)`,
                    gap: '10px',
                }}
            >
                {parsedMatrix2.flat().map((num, index) => (
                    <div
                        key={index}
                        className="w-12 h-12 flex items-center justify-center border border-gray-600 bg-gray-700 text-white rounded-lg shadow-md"
                    >
                        {num}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MatrixDisplay;
