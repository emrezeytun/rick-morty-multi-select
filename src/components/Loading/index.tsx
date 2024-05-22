import React from 'react';
import './Loading.scss';
import loadingGif from '@assets/images/loading.gif';

const Information: React.FC = () => {
  return (
    <div className="loading">
      <img src={loadingGif} alt="Loading" />
    </div>
  );
};

export default Information;
