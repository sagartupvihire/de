"use client"
import { userAgent } from 'next/server'

import React, { useState } from 'react';

const DownloadPage = () => {
  const [videoLink, setVideoLink] = useState('');
  const [videoFileName, setVideoFileName] = useState('');

  const handleInputChange = (event) => {
    setVideoLink(event.target.value);
  };

  const handleDownload = () => {
    // Extract the video filename from the link (you may need to adapt this based on the actual video link format)
    const url = new URL(videoLink);
    const pathnameParts = url.pathname.split('/');
    const newVideoFileName = pathnameParts[pathnameParts.length - 1];

    setVideoFileName(newVideoFileName);
  };

  return (
    <div>
      <h1>Video Download Page</h1>
      <label>
        Enter Video Link:
        <input type="text" value={videoLink} onChange={handleInputChange} />
      </label>
      <button onClick={handleDownload}>Get Video</button>

      {videoFileName && (
        <div>
          <p>Click the link below to download the video:</p>
          <a href={videoLink} download={videoFileName}>
            Download Video
          </a>
        </div>
      )}
    </div>
  );
};

export default DownloadPage;

