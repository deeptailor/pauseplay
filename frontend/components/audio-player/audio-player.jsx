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
      loop: false,
      que: [],
      queLength: 0,
      queStyle: {display: 'none'}
    };
    this.togglePlayPauseAction = this.togglePlayPauseAction.bind(this);
    this.updatePlaybar = this.updatePlaybar.bind(this);
    this.showPlayer = this.showPlayer.bind(this);
    this.togglePlayPauseButton = this.togglePlayPauseButton.bind(this);
    this.toggleLoop = this.toggleLoop.bind(this);
    this.playNextSongInQue = this.playNextSongInQue.bind(this);
    this.queList = this.queList.bind(this)
    this.toggleQueStyle = this.toggleQueStyle.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentSong.audio_url && nextProps.currentSong.audio_url !== this.state.currentSong){
      this.setState({
        currentSong: nextProps.currentSong.audio_url,
        playing: true
      });
    }
    if(nextProps.que.length !== 0){
      if(!nextProps.currentSong.audio_url){
        this.props.addToCurrentSongFromQue();
        this.setState({queLength: this.state.que.slice(1), progress: 0, playing: true})
      }
      this.setState({que: nextProps.que, queLength: nextProps.que.length})
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
      return {visibility: 'visible'}
    }
    else{
      return {visibility: 'hidden'}
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

playNextSongInQue(){
  if(this.props.que.length > 0){
    this.props.addToCurrentSongFromQue();
    this.setState({queLength: this.state.que.slice(1), progress: 0, playing: true})
  }
  else{
    this.setState({que: [], queLength: 0, playing: false, progress: 0, currentSong: ''})
  }
}

queList(){
  if(this.state.que.length > 0){
    return this.state.que.map((song,i) => <li key={`que-${i}`}>{song.title}</li>)
  }else{
    return(<p>Add Songs To Que</p>)
  }
}

toggleQueStyle(){
  if(this.state.queStyle.display !== 'none'){
    this.setState({queStyle:{display:'none'}});
  }else{
    this.setState({queStyle:{display:'block'}});
  }
}



render(){
  return (
    <div className="audio-bar-container" id="audiobar" style={this.showPlayer()}>
      <ReactPlayer
        playing={this.state.playing}
        loop={this.state.loop}
        url={this.state.currentSong}
        hidden={true}
        onProgress={this.updatePlaybar}
        onEnded={this.playNextSongInQue}
        />

      <div className="audio-controls">
        <div className="rewind-audio-control"><i className="material-icons">skip_previous</i></div>
        <div className="play-pause-audio-control">{this.togglePlayPauseButton()}</div>
        <div className="forward-audio-control"><i className="material-icons" onClick={this.playNextSongInQue}>skip_next</i></div>
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

      <div className="audio-que" onClick={this.toggleQueStyle}>
        <p>{this.state.que.length}</p>
        <div className="que-list" style={this.state.queStyle}>
          <h3>Your Que:</h3>
          {this.queList()}
        </div>
      </div>


    </div>
    )
  }
}

export default AudioPlayer;
