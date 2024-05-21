import { render, screen } from '@testing-library/react';
import SingleItem from './';
import { SingleItemProps } from '../../types/SingleItemProps';

const defaultProps: SingleItemProps = {
  avatarImageUrl: 'https://emrezeytun.com.tr/img/slide1.jpg',
  name: '<strong>Rick Sanchez</strong>',
  variant: 51,
  id: 1,
  isChecked: false,
  onCheckboxChange: jest.fn(),
};

describe('SingleItem component', () => {
  it('renders the avatar image correctly', () => {
    render(<SingleItem {...defaultProps} />);
    const imgElement = screen.getByAltText('Avatar');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', defaultProps.avatarImageUrl);
  });

  it('renders the name with HTML correctly', () => {
    render(<SingleItem {...defaultProps} />);
    const nameElement = screen.getByText(/Rick Sanchez/i);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toContainHTML('<strong>Rick Sanchez</strong>');
  });
});
