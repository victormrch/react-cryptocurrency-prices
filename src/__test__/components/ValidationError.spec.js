import { render } from '@testing-library/react';
import { ValidationError } from '../../components/validationError/ValidationError';
import '@testing-library/jest-dom/extend-expect';

describe('ValidateError component specs', () => {
	it('should render correctly using snapshot testing', () => {
		const { asFragment } = render(<ValidationError />);
		expect(asFragment()).toMatchSnapshot();
	});
});
