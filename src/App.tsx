import React from 'react';
import logo from './logo.svg';
import './App.css';

//function declaration
function App (){
    //Gibt was aus wichtig

    //Gibt zurück
  return (
    <div className='Position'>
        <GetStart />
        <GetNumber />
        <GetString />
    </div>
  );
}

function GetStart (){
    return(
        <div>
            <div>Start</div>
            <div>Start</div>
            <div>Start</div>
        </div>
    );
}

function GetNumber () {
    return (
        <div>
            <div>Number_1</div>
            <div>Number_2</div>
            <div>Number_3</div>
        </div>
    );
}
    function GetString (){
        return(
            <div>
                <div>String</div>
                <div>String</div>
                <div>String</div>
            </div>
        );
    }


export default App;
