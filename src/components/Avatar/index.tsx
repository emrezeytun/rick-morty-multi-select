import React from 'react';
import './Avatar.scss';
import { AvatarProps } from './types/AvatarProps';

const Avatar: React.FC<AvatarProps> = ({ avatarImageUrl }) => {
  return (
    <div className="avatar">
      <img src={avatarImageUrl} alt="Avatar" />
    </div>
  );
};

export default Avatar;
