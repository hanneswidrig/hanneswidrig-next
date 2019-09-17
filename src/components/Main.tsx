import React from 'react';
import '../App.css';
import { Header } from './Header';
import { Experience } from './Experience';

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
