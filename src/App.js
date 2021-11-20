import React from 'react';
import Navigation from './components/Navigation/Navigation';

import './App.css';


function App() {
  const composeEmail = () => "window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"

  return (
    <div className="app">
      <Navigation />

      <div className='footer'>
        <a href='#' className='cryptedtxt'
           data-name="katherine.heinemann"
           data-domain="gmail"
           data-tld="com"
           onClick={composeEmail}>Contact</a>
      </div>
    </div>
  );
}

export default App;
