import React from 'react'
import VideoPlayer from 'react-video-js-player'
import Car from './video/car.mp4'
const App = () => {
  const videoSrc = Car;
  const poster = 'https://rukminim1.flixcart.com/image/416/416/k8by93k0/poster/h/2/f/medium-car-poster-decorative-poster-poster-for-room-high-original-imafqcnpvgkktpya.jpeg?q=70'
  return (
    <div>
      <h1>Videojs</h1>
      <VideoPlayer 
        src={videoSrc}
        poster={poster}
        width='720'
        height='420'
      />
    </div>
  )
}
export default App
