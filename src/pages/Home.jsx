import React from "react";
import VideoCard from "../componants/VideoCard";

function Home({videos}) {
  
  return (
    <div>
    
      <div className="p-4">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard
              key={video.id.videoId}
              videoId={video.id.videoId}
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.medium.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
