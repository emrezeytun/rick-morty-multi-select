import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputBox from './';

describe('InputBox component', () => {
  it('renders the name correctly', () => {
    const name = 'Rick James';
    const id = 1;
    const onCheckboxChange = jest.fn();
    render(
      <InputBox name={name} id={id} onCheckboxChange={onCheckboxChange} />
    );
    const nameElement = screen.getByText(/Rick James/i);
    expect(nameElement).toBeInTheDocument();
  });
});
