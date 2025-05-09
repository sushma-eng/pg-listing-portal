import React, { useState } from 'react';
import Login from './Login';
import Pagination from './Pagination';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const pgData = [
    { id: 1, name: 'Sunrise PG', location: 'Chennai', rent: '₹6000' },
    { id: 2, name: 'Moonlight Stay', location: 'Hyderabad', rent: '₹7000' },
    { id: 3, name: 'Cloud Nest', location: 'Bangalore', rent: '₹8000' },
    // Add more PGs...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = pgData.slice(indexOfFirst, indexOfLast);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h2>PG Listings</h2>
          <ul>
            {currentPosts.map(pg => (
              <li key={pg.id}>
                <h3>{pg.name}</h3>
                <p>{pg.location}</p>
                <p>{pg.rent}</p>
              </li>
            ))}
          </ul>
          <Pagination
            totalPosts={pgData.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
}

export default App;

