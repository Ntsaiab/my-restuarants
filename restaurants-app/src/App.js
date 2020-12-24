import { useState, useEffect, useRef } from 'react';
import CommentsForm from './CommentsForm';
import RestaurantInfo from './RestaurantInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RestaurantInfo />
        <h1>CONTACT</h1>
        <CommentsForm />
      </header>
    </div>
  );
}

export default App;
