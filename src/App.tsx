import React, { useState } from 'react';

import './App.css';
import { Main } from './components/Main';

export const App = () => {
  // const fb = firebase.database().ref('/');
  const [fullName] = useState('Hannes Widrig');

  // useEffect(() => {
  //   fb.once('value').then((snapshot: firebase.database.DataSnapshot) => {
  //     const data: Root = snapshot.val();
  //     setFullName(data.me.details.fullName);
  //   });
  // }, [fb]);

  return (
    <div className="App">
      <Main fullName={fullName} />
      {/* <footer className="App-footer"></footer> */}
    </div>
  );
};
