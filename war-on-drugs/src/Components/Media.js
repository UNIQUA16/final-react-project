import Grid from "@mui/material/Grid";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { useState } from "react";


function Media({}) {
  const [videoPlaying, setvideoPlaying] = useState(false);
  const videos = [
    {
      url: "https://www.youtube.com/embed/jbETGBSwQ0M?list=PLDbSvEZka6GGanXjSfH1bQNVheppFQWWo",
    },

    {
      url: "https://www.youtube.com/embed/Xf5qFIpJ2sk",
    },

    {
      url: "https://www.youtube.com/embed/pCyYSQLAEFk",
    },
  ];
  const handleVideoPlay = () => {
    setvideoPlaying(true);
  };
  return (
    <div className="slide-container">
      <Slide duration={videoPlaying ? 600000 : 5000}>
        {videos.map((video, index) => (
          <div className="each-slide" key={index}>
            <iframe
              onClick={handleVideoPlay}
              width="500"
              height="320"
              src={video.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Media;
