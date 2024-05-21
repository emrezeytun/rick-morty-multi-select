import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { act } from 'react';
import Avatar from './';

describe('Avatar component', () => {
  it('renders the avatar image correctly', () => {
    const avatarImageUrl = 'https://emrezeytun.com.tr/img/slide1.jpg';

    act(() => {
      render(<Avatar avatarImageUrl={avatarImageUrl} />);
    });

    const imgElement = screen.getByAltText('Avatar');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', avatarImageUrl);
  });
});
