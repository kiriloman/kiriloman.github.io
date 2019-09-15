import React from 'react';
import './App.css';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import MediaLinks from './MediaLinks';

function App() {
  return (
    <div className='app'>
      <Header />
      <MediaLinks />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
