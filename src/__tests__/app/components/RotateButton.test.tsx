import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RotateButton from '@/app/components/RotateButton';

describe('RotateButton', () => {
    const handleRotate = jest.fn();

    it('renders without crashing', () => {
        const { container } = render(
            <RotateButton
                handleRotate={handleRotate}
                parsedMatrix={[
                    [1, 2],
                    [3, 4],
                ]}
            />
        );
        expect(container).toBeInTheDocument();
    });

    it('displays the button with correct text', () => {
        const { getByText } = render(
            <RotateButton
                handleRotate={handleRotate}
                parsedMatrix={[
                    [1, 2],
                    [3, 4],
                ]}
            />
        );
        expect(getByText('Rotar')).toBeInTheDocument();
    });

    it('button is enabled when parsedMatrix does not contain zero', () => {
        const { getByText } = render(
            <RotateButton
                handleRotate={handleRotate}
                parsedMatrix={[
                    [1, 2],
                    [3, 4],
                ]}
            />
        );
        const button = getByText('Rotar');
        expect(button).not.toBeDisabled();
    });

    it('button is disabled when parsedMatrix contains zero', () => {
        const { getByText } = render(
            <RotateButton
                handleRotate={handleRotate}
                parsedMatrix={[
                    [0, 2],
                    [3, 4],
                ]}
            />
        );
        const button = getByText('Rotar');
        expect(button).toBeDisabled();
    });

    it('calls handleRotate on button click when enabled', () => {
        const { getByText } = render(
            <RotateButton
                handleRotate={handleRotate}
                parsedMatrix={[
                    [1, 2],
                    [3, 4],
                ]}
            />
        );
        const button = getByText('Rotar');
        fireEvent.click(button);
        expect(handleRotate).toHaveBeenCalled();
    });
});
