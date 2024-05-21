import React from 'react';
import './Loading.scss';
import loadingGif from '../../assets/images/loading.gif';

const Information: React.FC = () => {
  return (
    <div className="loading">
      <img src={loadingGif} />
    </div>
  );
};

export default Information;
