"use client"
import { userAgent } from 'next/server'
// pages/download.js

import React from 'react';

const DownloadPage = () => {
  const videoFileName = 'example.mp4';
  const videoFilePath = `/videos/${videoFileName}`;

  return (
    <div>
      <h1>Video Download Page</h1>
      <p>Click the link below to download the video:</p>
      <a href={videoFilePath} download={videoFileName}>
        Download Video
      </a>
    </div>
  );
};

export default DownloadPage;
