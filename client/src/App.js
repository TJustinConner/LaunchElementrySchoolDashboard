import React from 'react';
import Directory from './components/Directory';

function App() {
  return (
  <div>
    <Directory type={'teacher'}></Directory>
    <Directory type={'student'}></Directory>
  </div>
  );
}

export default App;
