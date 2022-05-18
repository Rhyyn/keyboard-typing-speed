import './App.css'
import * as React from 'react';
import Keyboard from './Components/keyboard';

const App = () => {


  return (
    <main className="App">
      <section id='pageContainer'>
          <Keyboard></Keyboard>
      </section>
    </main>
  )
}

export default App;
