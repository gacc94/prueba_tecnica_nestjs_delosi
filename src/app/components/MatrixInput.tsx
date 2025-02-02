import React from 'react';
import { handleInputChange, handleKeyDown } from '../utils';

interface MatrixInputProps {
    parsedMatrix: number[][];
    setParsedMatrix: React.Dispatch<React.SetStateAction<number[][]>>;
    setParsedMatrix2: React.Dispatch<React.SetStateAction<number[][]>>;
    setMatrix: React.Dispatch<React.SetStateAction<string>>;
}

const MatrixInput: React.FC<MatrixInputProps> = ({ parsedMatrix, setParsedMatrix, setMatrix }: MatrixInputProps) => {
    return (
        <div
            className="grid justify-center mb-6"
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${parsedMatrix.length}, 50px)`,
                gap: '10px',
            }}
        >
            {parsedMatrix.map((row, rowIndex) =>
                row.map((value, colIndex) => (
                    <input
                        key={`${rowIndex}-${colIndex}`}
                        type="text"
                        value={value.toString()}
                        onChange={(e) =>
                            handleInputChange(e, rowIndex, colIndex, parsedMatrix, setParsedMatrix, setMatrix)
                        }
                        onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex, parsedMatrix)}
                        data-index={`${rowIndex}-${colIndex}`}
                        className="w-12 h-12 p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300 shadow-lg text-center"
                    />
                ))
            )}
        </div>
    );
};

export default MatrixInput;
