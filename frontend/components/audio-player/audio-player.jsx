import React from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from 'react-router';


class AudioPlayer extends React.Component{
  constructor(props){
    super(props);
    this.currentSong = ''
    this.state = {
      currentSong: '',
      playing:false,
      paused:false,
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
    this.routerPush = this.routerPush.bind(this)
    this.playSong = this.playSong.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentSong.audio_url && nextProps.currentSong.audio_url !== this.state.currentSong && !nextProps.pause){
      this.setState({
        currentSong: nextProps.currentSong.audio_url,
        playing: true,
        progress: 0,
        loaded: 0
      });
    }
    if(nextProps.que.length !== 0){
      if(!nextProps.currentSong.audio_url){
        this.props.addToCurrentSongFromQue();
        this.setState({queLength: this.state.que.slice(1), progress: 0, loaded: 0, playing: true})
      }
      this.setState({que: nextProps.que, queLength: nextProps.que.length})
    }
    if(nextProps.pause){
      this.setState({paused:true, playing:false})
    }
    if(!nextProps.pause){
      this.setState({paused:false, playing:true})
    }
    if(nextProps.playing){
      this.setState({playing:true, paused:false})
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
      this.props.pauseSong();
      this.setState({
        playing: false,
        pause: true,
      });
    }else{
      this.props.undoPauseSong();
      this.setState({
        playing: true,
        pause: false
      });
    }
  }

  playSong(){
    this.setState({pause: false, playing:true})
  }

  togglePlayPauseButton(){
    if(this.state.playing && !this.state.paused && this.props.currentSong.audio_url){
      $('title').html(`&#9658;&nbsp;${this.props.currentSong.title} - ${this.props.currentSong.artist} - Pauseplay`)
      return (<i className="material-icons" onClick={this.togglePlayPauseAction}>pause_circle_filled</i>)
    }
    else{
      $('title').html('Pauseplay')
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
    this.setState({queLength: this.state.que.slice(1), progress: 0, playing: true, paused: false})
  }
  else{
    this.props.pauseSong();
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

routerPush(location){
  return () => this.props.router.push(location);
}



render(){
  return (
    <div className="audio-bar-container" id="audiobar" style={this.showPlayer()}>
      <ReactPlayer
        playing={this.state.playing && !this.state.paused}
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
        <div onClick={this.routerPush(`albums/${this.props.currentSong.album_id}`)}>
          <span>{`${this.props.currentSong.title} - ${this.props.currentSong.artist}`}</span>
        </div>
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

export default withRouter(AudioPlayer);
