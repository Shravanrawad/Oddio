import React from 'react';
import { Link } from 'react-router-dom';

function VideoCard({ videoId, title, thumbnail }) {
  return (
    <div className="w-full">
      <Link to={`/video/${videoId}`}>
        <div className="relative w-full h-50 sm:h-64 md:h-72 lg:h-80">
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105"
          />
        </div>
        <h3 className="mt-2 text-sm font-semibold text-gray-800">{title}</h3>
      </Link>
    </div>
  );
}

export default VideoCard;
