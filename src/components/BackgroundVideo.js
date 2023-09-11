import ReactPlayer from 'react-player';
import promoVideo from '../assets/videos/igfTrim2.mp4';
import '../assets/styles/BackgroundVideo.css';

function BackgroundVideo() {

  return (
    <div className="background-video-wrapper">
        <ReactPlayer 
            className="background-video"
            url={promoVideo}
            playing={true}
            muted={true}
            loop={true}
        />
        {/* <div className="content-container">
        </div> */}
    </div>
  )
}

export default BackgroundVideo