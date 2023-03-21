import React from "react";
import { Link } from "react-router-dom";
import {
  demoVideoUrl,
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoProfilePicture,
} from "../../Utils/constants";
import "./videoCard.scss";

const VideoCard = ({channelId,videoId,thumbnailMedium,title,channelTitle,key}) => {
  return (
    <div key={key} className="cont-card">
      <Link to={videoId ? `video/${videoId}` : `channel/${channelId}`} className='link'>
        <div className="img-card">
          <img src={thumbnailMedium? thumbnailMedium : demoThumbnailUrl} alt="thumbnail" />
        </div>
        <div className="meta-card">
          <div className="desc">
            <span className="judul">{title? title : demoChannelTitle}</span>
            <span className="chanel">{channelTitle? channelTitle : ""}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
