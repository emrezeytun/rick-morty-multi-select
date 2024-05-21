import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SelectboxMulti from './'
import { SelectboxMultiProps } from '../../types/SelectboxMultiProps'

const defaultProps: SelectboxMultiProps = {
  isSelectboxOpen: false,
  setIsSelectboxOpen: jest.fn(),
  onChangeSearch: jest.fn(),
  selectedCharacters: [],
  onCheckboxChange: jest.fn(),
};

describe('SelectboxMulti component', () => {
  it('renders the input with correct placeholder', () => {
    render(<SelectboxMulti {...defaultProps} />);
    const inputElement = screen.getByPlaceholderText('Karakter arayın...');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChangeSearch when input value changes', () => {
    const onChangeSearch = jest.fn();
    render(<SelectboxMulti {...defaultProps} onChangeSearch={onChangeSearch} />);

    const inputElement = screen.getByPlaceholderText('Karakter arayın...');
    fireEvent.change(inputElement, { target: { value: 'Rick' } });

    expect(onChangeSearch).toHaveBeenCalledTimes(1);
    expect(onChangeSearch).toHaveBeenCalledWith('Rick');
  });
});