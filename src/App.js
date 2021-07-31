import './App.css';
import React, { useState } from 'react';
import { Luu } from './components/luu/luu';

function App() {
  const pages = { sakshi: 'Sakshi', luu: 'Luu' }
  const [state, setState ] = useState(null)

  console.log('Current State:', state);

  const handleLink = (pages) => setState(pages);

  if (state === pages.sakshi) {
  
    return <p>This is Sakshi's Page</p>
  
  } else if(state === pages.luu) {

    return <Luu/>;

  } else {
  
    return (
      <div className="App-body">
        <div className="buttonLinks">  
            <button onClick={() => (handleLink(pages.sakshi))} className="App-link" type='button'>
              <b>Sakshi</b>
            </button>
            <button onClick={() => (handleLink(pages.luu))} className="App-link" type='button'>
              <b> Luu</b>
            </button>
        </div>
      </div>
    );
  
  }
}

export default App;
