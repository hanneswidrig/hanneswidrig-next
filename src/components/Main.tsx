import React from 'react';
import '../App.css';
import { Header } from './Header';
import { Experience } from './Experience';

type MainProps = {
  fullName: string;
};
export const Main = (props: MainProps) => {
  return (
    <div className="App-main">
      <Header {...props} />
      <Experience />
    </div>
  );
};
