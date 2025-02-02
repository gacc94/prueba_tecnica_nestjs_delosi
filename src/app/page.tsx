'use client';
import { useState } from 'react';
import { rotateMatrixCounterClockwise } from './utils/matrixUtils';
import MatrixSizeSelector from './components/MatrixSizeSelector';
import MatrixInput from './components/MatrixInput';
import MatrixDisplay from './components/MatrixDisplay';
import RotateButton from './components/RotateButton';

export default function Home() {
    const [matrixSize, setMatrixSize] = useState<number | null>(null);
    const [matrix, setMatrix] = useState<string>(`[]`);
    const [parsedMatrix, setParsedMatrix] = useState<number[][]>(JSON.parse(matrix));
    const [parsedMatrix2, setParsedMatrix2] = useState<number[][]>([...JSON.parse(matrix)]);
    const [error, setError] = useState<string | null>(null);

    const handleRotate = () => {
        try {
            setParsedMatrix2(rotateMatrixCounterClockwise);
            setError(null);
        } catch {
            setError('Error al procesar la matriz. Asegúrate de que sea un array válido.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 animate-gradient-x">
            <h1 className="text-5xl font-extrabold mb-8 text-center text-white drop-shadow-lg">Rotador de Matriz</h1>
            <div className="mt-6 p-8 bg-gray-800 rounded-lg shadow-2xl w-full max-w-md">
                <MatrixSizeSelector
                    matrixSize={matrixSize}
                    setMatrixSize={setMatrixSize}
                    setMatrix={setMatrix}
                    setParsedMatrix={setParsedMatrix}
                    setParsedMatrix2={setParsedMatrix2}
                    setError={setError}
                />
                {matrixSize !== null && matrixSize > 0 && (
                    <div className="mb-6 text-white font-bold text-center">Ingrese los valores:</div>
                )}
                <MatrixInput
                    parsedMatrix={parsedMatrix}
                    setParsedMatrix={setParsedMatrix}
                    setParsedMatrix2={setParsedMatrix2}
                    setMatrix={setMatrix}
                ></MatrixInput>
                <RotateButton handleRotate={handleRotate} parsedMatrix={parsedMatrix} />
            </div>
            {error && <p className="text-red-500 text-center mt-4 font-semibold">{error}</p>}
            <MatrixDisplay parsedMatrix2={parsedMatrix2} />
        </div>
    );
}
