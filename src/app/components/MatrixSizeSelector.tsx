import React, { ChangeEvent } from 'react';

interface MatrixSizeSelectorProps {
    matrixSize: number | null;
    setMatrixSize: React.Dispatch<React.SetStateAction<number | null>>;
    setMatrix: React.Dispatch<React.SetStateAction<string>>;
    setParsedMatrix: React.Dispatch<React.SetStateAction<number[][]>>;
    setParsedMatrix2: React.Dispatch<React.SetStateAction<number[][]>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const MatrixSizeSelector: React.FC<MatrixSizeSelectorProps> = ({
    matrixSize,
    setMatrixSize,
    setMatrix,
    setParsedMatrix,
    setParsedMatrix2,
    setError,
}) => {
    const handleMatrixSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const size = parseInt(e.target.value, 10);
        if (!isNaN(size) && size > 0) {
            setMatrixSize(size);
            const newMatrix = Array.from({ length: size }, () => Array(size).fill(0));
            setMatrix(JSON.stringify(newMatrix));
            setParsedMatrix(newMatrix);
            setParsedMatrix2(newMatrix);
            setError(null);
        } else {
            setError('Ingrese un tamaño válido para la matriz.');
        }
    };

    return (
        <div className="mb-4">
            <label className="text-white font-bold mr-4">
                Tamaño de la matriz
                <span className="text-yellow-400">(</span>
                NxN
                <span className="text-yellow-400">)</span>:
            </label>
            <select
                value={matrixSize ?? ''}
                onChange={handleMatrixSizeChange}
                className="w-full max-w-md p-4 border border-gray-600 rounded-lg mb-6 bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-indigo-500 transition duration-300 shadow-lg"
            >
                <option value="" disabled>
                    Seleccione
                </option>
                {[...Array(5).keys()]
                    .map((size) => size + 1)
                    .filter((size) => size !== 1)
                    .map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default MatrixSizeSelector;
