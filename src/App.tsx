import React from 'react';
import './App.css';
import Smiles from "./components/Smiles_Directory/Smyles";
import {Rating} from "./components/Rating_Directory/Rating";


function App (){


     //🖕
    console.log("Raiting Ausgabe App")
  return (
    <div className='position'>
      <Smiles/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
    </div>
  );
}




export default App;
