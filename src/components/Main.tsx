import React from 'react';
import '../App.css';

interface MainProps {
  fullName: string;
}

export const Main: React.FC<MainProps> = ({ fullName }: MainProps) => {
  return <main className="App-main"></main>;
};
