import React from 'react';
import { useParams } from 'react-router-dom';

function Video() {
  const { id } = useParams();

  return (
    <div className="flex flex-col mt-4 px-4 items-center">
      <iframe
        className="w-full h-96"
        src={`https://www.youtube.com/embed/${id}`}
        title="Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2 className="mt-4 text-2xl font-bold">Video Title Here</h2>
    </div>
  );
}

export default Video;
