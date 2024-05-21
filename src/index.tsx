import React from 'react';
import ReactDOM from 'react-dom/client';
import { MultiSelect } from './components';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MultiSelect />
    </React.StrictMode>
  );
  reportWebVitals();
} else {
  console.error('root not found');
}
