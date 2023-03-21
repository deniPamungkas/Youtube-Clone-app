import React, { useEffect, useState } from "react";
import VideoCard from "../../Components/videoCard/videoCard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import fetchApi from "../../Utils/fetchAPI";
import "./Feed.scss";
import ChannelCard from "../../Components/ChannelCard/ChannelCard";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data);
    });
  }, [selectedCategory]);
  return (
    <div className="container-feed">
      <div className="sidebar-feed">
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
      </div>
      <div className="main-feed">
        <div className="vidName">
          <span className="V">{selectedCategory}</span>{" "}
          <span className="V" style={{ color: "red", fontWeight: "bold" }}>
            videos
          </span>
        </div>
        <div className="videos">
          {videos.items?.map((item) => {
            const channelId = item.id.channelId;
            const videoId = item.id.videoId;
            const thumbnailMedium = item.snippet.thumbnails.medium.url;
            const title = item.snippet.title;
            const channelTitle = item.snippet.channelTitle;
            return (
              <li key={item.id.videoId ? item.id.videoId : item.id.channelId}>
                {item.id.channelId && (
                  <ChannelCard
                    channelId={channelId}
                    thumbnailMedium={thumbnailMedium}
                    channelTitle={channelTitle}
                    key={item.id.channelId}
                  />
                )}
                {item.id.videoId && (
                  <VideoCard
                    videoId={videoId}
                    thumbnailMedium={thumbnailMedium}
                    title={title}
                    channelTitle={channelTitle}
                    key={item.id.videoId}
                  />
                )}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
