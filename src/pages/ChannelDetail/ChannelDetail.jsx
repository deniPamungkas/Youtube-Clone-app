import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import VideoCard from '../../Components/videoCard/videoCard';
import fetchApi from "../../Utils/fetchAPI";
import './ChannelDetail.scss'

const ChannelDetail = () => {
    const [channel, setChannel] =useState()
    const [vid,setVid]=useState([])
    const {id} = useParams()
    useEffect(()=>{
      const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/channel',
        params: {id: id, sort_by: 'popular'},
        headers: {
          'X-RapidAPI-Key': 'd2af35cb5bmsha8f52819f3ca6cdp118da6jsn79888714f6ff',
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        setChannel(response.data.meta);
        setVid(response.data.data)
      }).catch(function (error) {
        console.error(error);
      });
    },[id])
  return (
    <div className='channel-detail'>
      <div className='channel'>
        <img src={channel?.thumbnail[2].url} alt="profil-channel" />
        <span><h2>{channel?.title}</h2></span>
      </div>
      <br/><br/>
      <div className="videos">
          {vid?.map((item) => {
            const videoId = item.videoId;
            const thumbnailMedium = item.thumbnail[3].url;
            const title = item.title;
            return (
              <li key={item.videoId}>
                {item.videoId && <VideoCard videoId={videoId}
                    thumbnailMedium={thumbnailMedium}
                    title={title} key={item.videoId}/>}
              </li>
            );
          })}
        </div>
    </div>
  )
}

export default ChannelDetail