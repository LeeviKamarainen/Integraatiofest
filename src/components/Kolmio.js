// ScrollableVideoPage.js
import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/Kolmio.css'; // Import the CSS file for styling
import kolmio from '../assets/videos/kolmio.mp4';

const ScrollableVideoPage = () => {
  const [videos, setVideos] = useState([kolmio]); // Initial set of videos
  const [shouldLoadMore, setShouldLoadMore] = useState(true); // Control whether more videos can be loaded
  const videosRef = useRef(null);

  useEffect(() => {
    const currentVideosRef = videosRef.current; // Create a variable inside the effect

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            // Add more videos when the last one is fully visible, and shouldLoadMore is true
            if (shouldLoadMore && videos.length < 501) {
              setVideos((prevVideos) => [...prevVideos, kolmio]);
            }
          } else if (entry.intersectionRatio === 0) {
            // Set shouldLoadMore to false when the user scrolls away from the last video
            setShouldLoadMore(false);
          }
        });
      },
      {
        root: null,
        rootMargin: '200px',
        threshold: 0.8,
      }
    );

    if (currentVideosRef) {
      observer.observe(currentVideosRef);
    }

    return () => {
      if (currentVideosRef) {
        observer.unobserve(currentVideosRef);
      }
    };
  }, [shouldLoadMore, videos]);

  return (
    <div className="scrollable-video-page" ref={videosRef}>
      <div className="video-container">
        {videos.map((video, index) => (
          <div key={index} className="video-wrapper">
            <video autoPlay muted loop width="100%" height="50%">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableVideoPage;
