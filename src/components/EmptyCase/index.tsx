import React from 'react';
import './EmptyCase.scss';
import { EmptyCaseProps } from '../../types/EmptyCaseProps';

const Information: React.FC<EmptyCaseProps> = ({ emptyReason }) => {
  return (
    <div className="empty-case">
      <p>{emptyReason}</p>
    </div>
  );
};

export default Information;
