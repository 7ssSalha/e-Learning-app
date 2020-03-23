import React from 'react';
import Navbar from './Components/Navbar'; 
import Signin from './Components/Signin';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     {/* <Signin></Signin> */}
     <Signup></Signup>
    </div>
  );
}

export default App;