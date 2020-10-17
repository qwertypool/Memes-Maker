import React from 'react';
import './App.css';
import './tailwind.css';
import NavBar from './Componants/NavBar'
import Mememaker from './memes-maker'
const App=()=>
 {
  return (
  <React.Fragment>
    <NavBar />
    <Mememaker />
    </React.Fragment>
  );
}

export default App;
