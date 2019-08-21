import React, { useState, useEffect } from 'react'

import './App.css'
import firebase from './firebase'
import { Root } from './datamodels/root'

export const App: React.FC = () => {
  // const fb = firebase.database().ref('/')
  const [fullName, setFullName] = useState('Hannes Widrig')

  // useEffect(() => {
  //   fb.once('value').then((snapshot: firebase.database.DataSnapshot) => {
  //     const data: Root = snapshot.val()
  //     setFullName(data.me.details.fullName)
  //   })
  // }, [fb])

  return (
    <div className="App">
      <nav className="App-nav"></nav>
      <main className="App-main">
        <section className="App-section">{fullName}</section>
      </main>
      <footer className="App-footer"></footer>
    </div>
  )
}
