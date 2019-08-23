import React, { useState, useEffect } from 'react';

import './App.css';
import firebase from './firebase';
import { Root } from './dataModels/root';
import { Nav } from './components/Nav';
import { Main } from './components/Main';

export const App: React.FC = () => {
  const fb = firebase.database().ref('/');
  const [fullName, setFullName] = useState('Hannes Widrig');

  useEffect(() => {
    fb.once('value').then((snapshot: firebase.database.DataSnapshot) => {
      const data: Root = snapshot.val();
      setFullName(data.me.details.fullName);
    });
  }, [fb]);

  return (
    <div className="App">
      <Nav />
      <Main fullName={fullName} />
      <footer className="App-footer"></footer>
    </div>
  );
};
