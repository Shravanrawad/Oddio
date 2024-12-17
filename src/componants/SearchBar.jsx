import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ setVideos }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          q: query,
          key: 'AIzaSyCVPKd80uv_3D0e5Ocua3DerfwPayRS6xM',
        },
      });

      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 rounded-full w-96"
      />
      <button
        onClick={handleSearch}
        className="bg-red-500 px-4 py-2 rounded-full text-white"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
