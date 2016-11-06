import React from 'react';
import ReactPlayer from 'react-player';


class AudioPlayer extends React.Component{
  constructor(props){
    super(props);
    this.currentSong = ''
    this.state = {
      currentSong: '',
      playing:false,
      progress: 0,
      loaded: 0,
      loop: false
    };
    this.togglePlayPauseAction = this.togglePlayPauseAction.bind(this);
    this.updatePlaybar = this.updatePlaybar.bind(this);
    this.showPlayer = this.showPlayer.bind(this);
    this.togglePlayPauseButton = this.togglePlayPauseButton.bind(this);
    this.toggleLoop = this.toggleLoop.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentSong.audio_url){
      this.setState({
        currentSong: nextProps.currentSong.audio_url,
        playing: true
      });
    }
  }

  updatePlaybar({played, loaded}){
    this.setState({
      progress:(played * 100),
      loaded:(loaded !== undefined ? (loaded*100) : 100),
    });
  }

  showPlayer(){
    if(this.props.currentSong.audio_url){
      return {display: 'flex'}
    }
    else{
      return {display: 'none'}
    }
  }

  togglePlayPauseAction(){
    if(this.state.playing){
      this.setState({
        playing: false
      });
    }else{
      this.setState({
        playing: true
      });
    }
  }

  togglePlayPauseButton(){
    if(this.state.playing){
      return (<i className="material-icons" onClick={this.togglePlayPauseAction}>pause_circle_filled</i>)
    }
    else{
      return (<i className="material-icons" onClick={this.togglePlayPauseAction}>play_circle_filled</i>);
    }
  }

  toggleLoop(){
    if(this.state.loop){
      this.setState({loop: false})
    }else{
      this.setState({loop: true})
    }
  }

toggleLoopColor(){
  if (this.state.loop){
    return ({color: '#3cff00'})
  }else{
    return ({color: 'white'})
  }
}


  render(){
    return (
      <div className="audio-bar-container" style={this.showPlayer()}>
        <ReactPlayer
          playing={this.state.playing}
          url={this.state.currentSong}
          hidden={true}
          loop={this.state.loop}
          onProgress={this.updatePlaybar}
        />

        <div className="audio-controls">
          <div className="rewind-audio-control"><i className="material-icons">skip_previous</i></div>
          <div className="play-pause-audio-control">{this.togglePlayPauseButton()}</div>
          <div className="forward-audio-control"><i className="material-icons">skip_next</i></div>
        </div>

        <div className="progress-bar">
            <div className="progress-bar-color" style={{width:`${this.state.progress}%`}}/>
            <div className="loaded-bar-color" style={{width:`${this.state.loaded}%`}}/>
        </div>

        <div className="audio-bar-song-name">
          <p>{this.props.currentSong.title}</p>
        </div>
        <div className="audio-bar-options">
          <i className="material-icons" onClick={this.toggleLoop} style={this.toggleLoopColor()}>loop</i>
        </div>
      </div>
    )
  }
}

export default AudioPlayer;
