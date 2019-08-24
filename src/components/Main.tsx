import React from 'react';
import '../App.css';

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
    <header>
      <h1>
        <a href="/" className="Header-link">
          {props.fullName}
        </a>
      </h1>
    </header>
  );
};
