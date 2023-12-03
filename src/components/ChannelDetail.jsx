import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos } from './Videos'
import { fetchFromAPI } from '../utils/GETFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const {id} = useParams();

  console.log(channelDetail,videos);

  useEffect(() =>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=data`)
    .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight={"95vh"}>
      <Box>
        {id}
      </Box>
    </Box>
  )
}

export default ChannelDetail