import React from 'react';
import './App.css';

//function declaration
function App (){
    //Gibt was aus wichtig

    //Gibt zurück
  return (
    <div className='position'>
      <Smiles/>
      <Angry />
      <TongueShower/>
    </div>
  );
}


function Smiles (){
  return (
      <div>
        <div>😁</div>
        <div>😁</div>
        <div>😁</div>
      </div>
  );
}

function Angry (){
  return (
      <div>
        <div>😡</div>
        <div>😡</div>
        <div>😡</div>
      </div>
  );
}

function TongueShower (){
  return (
      <div>
        <div>😝</div>
        <div>😝</div>
        <div>😝</div>
      </div>
  );
}

export default App;
