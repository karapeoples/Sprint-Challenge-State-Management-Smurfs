import React from "react";
import "./App.css";
import Call from './Call';
import Post from './Post';
import { Alert } from 'reactstrap';



const App = ()=> {
  
    return (
      <div className="App">
        <h1 className='header'>SMURFS! 2.0 W/ Redux</h1>
        <Post />
        <Call />
      </div>
    );
  
}

export default App;
