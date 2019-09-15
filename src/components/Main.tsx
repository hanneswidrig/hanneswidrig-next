import React from 'react';
import '../App.css';
import { ReactComponent as GitHub } from '../resources/svg/github.svg';

interface MainProps {
  fullName: string;
}
export const Main: React.FC<MainProps> = (props: MainProps) => {
  return (
    <div className="App-main">
      <Header {...props} />
      <Experience />
    </div>
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

const Experience: React.FC = () => {
  return (
    <div>
      <Technical />
    </div>
  );
};

interface TechnicalProps {
  frontend: string[];
}
const Technical: React.FC = () => {
  const frontend = ['React', 'Angular'];
  return (
    <>
      {frontend.map((framework, idx) => (
        <Chip key={idx} name={framework} />
      ))}
    </>
  );
};

const Chip: React.FC<{ name: string }> = (props: { name: string }) => {
  return <div>{props.name}</div>;
};
