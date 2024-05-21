import React from 'react';
import './Information.scss';
import { InformationProps } from '../../types/InformationProps';

const Information: React.FC<InformationProps> = ({ name, variant }) => {
  return (
    <div className="information">
      <p
        className="information-name"
        dangerouslySetInnerHTML={{
          __html: name,
        }}
      />
      <p className="information-variant"> {variant} Episodes </p>
    </div>
  );
};

export default Information;
