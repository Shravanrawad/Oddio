import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar({setVideos}) {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
    
        <div className="flex items-center space-x-2">
         <SearchBar setVideos={setVideos}/>
        </div>

       
      
      </div>
    </nav>
  );
}

export default Navbar;
