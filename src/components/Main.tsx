import React from 'react';
import '../App.css';
import { ReactComponent as GitHub } from '../resources/svg/github.svg';

interface MainProps {
  fullName: string;
}

export const Main: React.FC<MainProps> = (props: MainProps) => {
  return (
    <main className="App-main">
      <Header {...props} />
    </main>
  );
};

const Header: React.FC<MainProps> = (props: MainProps) => {
  return (
    <header className="App-header">
      <div className="header-item">
        <a href="/" className="Header-link">
          {props.fullName}
        </a>
      </div>
      <GitHub className="header-item github-icon" />
    </header>
  );
};
