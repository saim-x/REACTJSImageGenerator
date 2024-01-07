import React, { useState } from 'react';
import MyImage from './myImage';
import MyHeading from './MyHeading';
import './App.css';

const user = {
  name: 'User ',
  sizex: 300,
  sizey: 300,
};

function MyApp() {
  const [enteredUsername, setEnteredUsername] = useState(user.name); // Initialize with default name
  const [imageX, setImageX] = useState(user.sizex);
  const [imageY, setImageY] = useState(user.sizey);

  const handleUsernameChange = (event) => {
    setEnteredUsername(event.target.value);
  };

  const handleImageXChange = (event) => {
    setImageX(event.target.value);
  };

  const handleImageYChange = (event) => {
    setImageY(event.target.value);
  };

  return (
    <div className="container">
      <MyHeading name={enteredUsername} />
      <MyImage sizex={imageX} sizey={imageY} />
      <input
        type="text"
        placeholder="Enter your name"
        value={enteredUsername}
        onChange={handleUsernameChange}
      />
      <input
        type="number"
        placeholder="Image X dimension"
        value={imageX}
        onChange={handleImageXChange}
      />
      <input
        type="number"
        placeholder="Image Y dimension"
        value={imageY}
        onChange={handleImageYChange}
      />
      <p className="developer">Developed by Saim | <a href="https://www.linkedin.com/in/contactsaim" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    </div>
  );
}

export default MyApp;
