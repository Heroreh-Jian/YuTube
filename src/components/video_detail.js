import React from 'react';

const VideoDetails =({video}) => {
  if (!video){
    return <div className="jumbotron">Loading!!!!</div>;
  }
  const videoId= video.id.videoId;
  // const videoURL = "https://www.youtube.com/embed/" + videoId;
  // The same as the following
  const videoURL = `https://www.youtube.com/embed/${videoId}`;
  
  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="This is a unique title" className="embed-responsive-item" src={videoURL}></iframe>
      </div>
      <div className="details">
      <div className="pull-right">Published on {video.snippet.publishedAt}</div>
        <div><strong>{video.snippet.title}</strong></div>
        <hr />
        <div><strong>Description: </strong>{video.snippet.description}</div>
      </div>
    </div>
    ); 
};
export default VideoDetails;