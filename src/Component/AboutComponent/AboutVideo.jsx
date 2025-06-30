import React, { useEffect, useRef, useState } from 'react'
import videoFile from '../../assets/video/brows.MP4';
import '../../assets/Sass/About/aboutVideo.scss'

const AboutVideo = ({showVideo,setShowVideo}) => {
      const videoRef = useRef(null);

      const closeVideo = () => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
        setShowVideo(false);
      };
  return (
    
    <div className='video'>
       <div className={`video-section ${showVideo ? 'video-section' : 'd-none'}`}>
       {/* <div className="video-section"> */}
                  <div className="video-shadow"></div>
                  <div className="video-content">
                  <div onClick={closeVideo} className="delete-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5297 17.4707C18.8227 17.7637 18.8227 18.2388 18.5297 18.5318C18.3837 18.6778 18.1917 18.7517 17.9997 18.7517C17.8077 18.7517 17.6158 18.6788 17.4698 18.5318L11.9997 13.0617L6.52975 18.5318C6.38375 18.6778 6.19175 18.7517 5.99975 18.7517C5.80775 18.7517 5.61575 18.6788 5.46975 18.5318C5.17675 18.2388 5.17675 17.7637 5.46975 17.4707L10.9398 12.0008L5.46975 6.53079C5.17675 6.23779 5.17675 5.76275 5.46975 5.46975C5.76275 5.17675 6.23775 5.17675 6.53075 5.46975L12.0008 10.9398L17.4707 5.46975C17.7637 5.17675 18.2387 5.17675 18.5317 5.46975C18.8247 5.76275 18.8247 6.23779 18.5317 6.53079L13.0617 12.0008L18.5297 17.4707Z" fill="#E21D12"/></svg>
          </div>
                      <video
                        ref={videoRef}
                      src={videoFile}
                      controls
                     className="video-player"
                   />
                  </div>
               </div>
    </div>
  )
}

export default AboutVideo
