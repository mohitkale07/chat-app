import React from 'react'
import SignUp from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {
  return (
		<div className='p-4 h-screen flex items-center justify-center'>
      <Home/>
      {/* <SignUp/>
      <Login/> */}
    </div>
  );
}

export default App
