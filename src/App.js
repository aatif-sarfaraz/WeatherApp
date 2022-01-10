import React from 'react';
const api = {
  key : "3264307e951ce2249f1ce627a70f0422",
  base : "https://api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="app">
      <main>
        <div>
          <input
          type ="text"
          className='search-bar'
          placeholder='Search...'
          />
        </div>
      </main>
    </div>
  );
}

export default App;
