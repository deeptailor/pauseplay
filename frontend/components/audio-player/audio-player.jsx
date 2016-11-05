import React from 'react';
import ReactPlayer from 'react-player';


class AudioPlayer extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    return (
      <div className="audio-bar-container">
        <ReactPlayer
          className="audio-bar"
          height={"4vh"}
          width = {"80%"}
          backgroundColor={"black"}
          controls={true}
          url='https://res.cloudinary.com/dwf6beu4e/video/upload/v1473126400/wi8dtbavpe7f11yccu5t.mp3'
          />
      </div>
    )
  }
}

export default AudioPlayer;
