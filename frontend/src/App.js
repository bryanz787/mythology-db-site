import React, { useState } from 'react';
import './App.css';

import SplashPage from './SplashPage';
import AddPage from './AddPage';
import ViewPage from './ViewPage';
import SortPage from './SortPage';
import EditPage from './EditPage';
import DeletePage from './DeletePage';


function App() {
  const [currentPage, setCurrentPage] = useState('SplashPage');

  const renderPage = () => {
    switch (currentPage) {
      case 'SplashPage':
        return <SplashPage />;
      case 'AddPage':
        return <AddPage />;
      case 'ViewPage':
        return <ViewPage />;
      case 'SortPage':
        return <SortPage />;
      case 'EditPage':
        return <EditPage />;
      case 'DeletePage':
        return <DeletePage />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className="bg-gray-200 py-5">
        <div className="container mx-auto nav-container">
          <button className="nav-button" onClick={() => setCurrentPage('SplashPage')}>Home</button>
          <button className="nav-button" onClick={() => setCurrentPage('AddPage')}>Add Entries</button>
          <button className="nav-button" onClick={() => setCurrentPage('ViewPage')}>View Info</button>
          <button className="nav-button" onClick={() => setCurrentPage('EditPage')}>Edit Entries</button>
          <button className="nav-button" onClick={() => setCurrentPage('SortPage')}>Search Entries</button>
          <button className="nav-button" onClick={() => setCurrentPage('DeletePage')}>Delete Entries</button>
        </div>
      </nav>
      <div className="top-bar"></div>
      {renderPage()}
    </div>
  );
}

export default App;
