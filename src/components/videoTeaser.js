import React from 'react';

const VIDEO_MP4_URL = 'video/teaser.mp4'
const VIDEO_WEBM_URL = 'video/teaser.webm'

const VideoTeaser = () =>
  <div className="video-contain">
    <video id="background-video" loop autoPlay muted preload="auto">
      <source src={VIDEO_MP4_URL} type="video/webm" />
      <source src={VIDEO_WEBM_URL} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

export default VideoTeaser;
