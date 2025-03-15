import React from 'react'
import './app/App.css'
import Header from './components/header/header'
import Hook from './hooks/cards/card'

function App() {
  return (
    <div className='App'>
      <Header />
      <Hook />
    </div>
  );
}

export default App;
