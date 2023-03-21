import React from 'react'
import { Link } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified';
import './ChannelCard.scss'

const ChannelCard = ({channelId,videoId,thumbnailMedium,title,channelTitle,key}) => {
  return (
    <div key={key} className='channel-card'>
         <Link to={`channel/${channelId}`} className='link'>
        <div className="img-card">
          <img src={thumbnailMedium} alt="thumbnail" />
        </div>
        <div className="meta-card">
            <span className="channel">{channelTitle} <VerifiedIcon style={{"fontSize": "small", "color":"lightskyblue"}}/> {key}</span>
        </div>
      </Link>
    </div>
  )
}

export default ChannelCard