import React from 'react';
import './App.css';
import Smiles from "./components/Smiles_Directory/Smyles";
import {Rating} from "./components/Rating_Directory/Rating";

//function declaration
function App (){
    //Gibt was aus wichtig

    //Gibt zurück 🖕
  return (
    <div className='position'>
      <Smiles/>
      <Rating/>
    </div>
  );
}




export default App;
