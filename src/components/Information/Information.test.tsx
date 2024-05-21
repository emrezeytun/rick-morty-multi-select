import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Information from './';

describe('Information component', () => {
  it('renders the name with HTML is correctly', () => {
    const name = '<strong>Rick Sanchez</strong>';
    const variant = 51;
    render(<Information name={name} variant={variant} />);
    const nameElement = screen.getByText(/Rick Sanchez/i);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toContainHTML('<strong>Rick Sanchez</strong>');
    const variantElement = screen.getByText(/51 Episodes/i);
    expect(variantElement).toBeInTheDocument();
  });
});
