import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle, WrapText } from "@mui/icons-material"

import TimeSincePost from "./TimeSincePost"

const VideoCard = ({video})  => {
    console.log(video);
  return (
    <Card sx={{width:{md: '320px', xs: '356px'}}}>
        <Link to={`video/${video.id.videoId}`} >
            <CardMedia
             image={video.snippet?.thumbnails?.high?.url} 
             sx={{width: 360, height: 180}}
             />
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
            <Link to={`video/${video.id.videoId}`}  style={{ textDecoration: 'none' }}>
                <Typography variant="subtitle1" fontWeight={"bold"} color="#FFF">
                    { video.snippet.title.length > 70 ? `${video.snippet?.title.slice(0,70)}...`: video.snippet?.title}
                </Typography>
            </Link>

            <Link to={`channel/${video.snippet.channelId}`}  style={{ textDecoration: 'none' }}>
                <Typography variant="subtitle2" color="#AAA">
                { video.snippet.channelTitle.length > 70 ? `${video.snippet?.channelTitle.slice(0,70)}...`: video.snippet?.channelTitle}
                </Typography>
            </Link>
            <Typography variant="subtitle2" color="#AAA">
                <TimeSincePost date={video.snippet.publishTime} />
            </Typography>
            

            
        </CardContent>
        
    </Card>
  )
}

export default VideoCard