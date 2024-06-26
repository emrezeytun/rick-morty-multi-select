import React from 'react';
import './SingleItem.scss';
import Avatar from '../Avatar';
import Information from '../Information';
import { SingleItemProps } from './types/SingleItemProps';

const SingleItem: React.FC<SingleItemProps> = ({
  avatarImageUrl,
  name,
  variant,
  id,
  isChecked,
  onCheckboxChange,
}) => {
  return (
    <div
      onClick={() => onCheckboxChange(!isChecked, id)}
      className={`single-item ${isChecked ? 'checked' : ''}`}
    >
      <input type="checkbox" checked={isChecked} />
      <Avatar avatarImageUrl={avatarImageUrl} />
      <Information name={name} variant={variant} />
    </div>
  );
};

export default SingleItem;
