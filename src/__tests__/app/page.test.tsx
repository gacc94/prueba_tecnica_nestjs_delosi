import React from 'react';
import { render } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
    test('renders without crashing', () => {
        const { container } = render(<Home />);
        expect(container).toBeInTheDocument();
    });
});
