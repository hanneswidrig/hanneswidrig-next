import React from 'react';

import './App.css';
import { Main } from './components/Main';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <React.StrictMode>
        <Main fullName={'Hannes Widrig'} />
      </React.StrictMode>
    </div>
  );
};
