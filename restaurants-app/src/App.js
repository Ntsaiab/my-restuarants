import { useState, useEffect, useRef } from 'react';
import CommentsForm from './CommentsForm';
import RestaurantInfo from './RestaurantInfo';
import RestaurantForm from './RestaurantForm';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <h2>Add A Restaurant</h2>
        <RestaurantForm />
        <h2>Database Results</h2>
        <RestaurantInfo />
        <h2>CONTACT</h2>
        <CommentsForm />
        
      </header>
    </div>
  );
}

export default App;
