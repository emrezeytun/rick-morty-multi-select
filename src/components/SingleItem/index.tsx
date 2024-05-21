import React from 'react';
import './SingleItem.scss';
import Avatar from '../Avatar';
import Information from '../Information';
import { SingleItemProps } from '../../types/SingleItemProps';

const SingleItem: React.FC<SingleItemProps> = ({
  avatarImageUrl,
  name,
  variant,
  id,
  isChecked,
  onCheckboxChange,
}) => {
  return (
    <div className="single-item">
      <input
        onChange={(e) => onCheckboxChange(e.target.checked, id)}
        type="checkbox"
        checked={isChecked}
      />
      <Avatar avatarImageUrl={avatarImageUrl} />
      <Information name={name} variant={variant} />
    </div>
  );
};

export default SingleItem;
