interface RotateButtonProps {
    handleRotate: () => void;
    parsedMatrix: number[][];
}

export default function RotateButton({ handleRotate, parsedMatrix }: RotateButtonProps) {
    const isDisabled = parsedMatrix.flat().some((num) => num === 0);

    return (
        <button
            onClick={handleRotate}
            className={`${
                isDisabled ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-700 hover:bg-green-800'
            } text-white py-3 px-6 rounded-lg w-full max-w-md mb-6 font-bold transition duration-300 transform ${
                isDisabled ? '' : 'hover:scale-110'
            } shadow-lg`}
            disabled={isDisabled}
        >
            Rotar
        </button>
    );
}
