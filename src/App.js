import React from 'react';
import Profile from './profile/Profile';
import './App.css';



const App = () => {
  const handleName = () => {
    alert('Azza Souei');
  };

  return (
    <div className="App">
      <Profile
        fullName="Azza Souei"
        bio="A web developpment student"
        profession="Web Developer"
        image={<img src="1661901787385 (2).jpg" alt="Profile" />}
        handleName={handleName}
      />
    </div>
  );
};

export default App;

