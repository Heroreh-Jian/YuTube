import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageURL = video.snippet.thumbnails.default.url;
  //const video = props.video the same as {video}
  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} alt=""/>
        </div>
        
        <div className="media-body">
          <div className="media-heading" ><strong>{video.snippet.title}</strong>
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;