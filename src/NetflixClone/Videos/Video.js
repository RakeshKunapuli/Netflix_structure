import React, { useEffect, useState } from 'react';
import Header from '../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Styles from './Video.module.css';

function Video() {
  const SearchQuery = useSelector((state) => state.searchQuery);
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  const YOUR_API_KEY = 'AIzaSyDJZLDtoPcLZGlKATTds06La1R3Ow5bRoY';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUR_API_KEY}&part=snippet&q=${SearchQuery}&maxResults=50`
        );

        console.log('Response:', response);

        if (response.data && response.data.items) {
          const updatedVideos = response.data.items.map((video) => ({
            id: video.id.videoId,
            title: video.snippet.title,
            thumbnail: video.snippet.thumbnails.default.url,
          }));
          setVideos(updatedVideos);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call fetchData when SearchQuery changes
    fetchData();
  }, [SearchQuery, dispatch]);

  return (
    <>
      <Header />
      <div className={Styles.videocontainer}>
        {videos.map((video, i) => (
          <div className={Styles.videowrapper} key={i}>
            <img src={video.thumbnail.high.url} alt={video.title} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Video;
