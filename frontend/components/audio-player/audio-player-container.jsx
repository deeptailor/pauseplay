import { connect } from 'react-redux';
import AudioPlayer from './audio-player';
import {addToCurrentSongFromQue, pauseSong, undoPauseSong} from '../../actions/songs_actions'


const mapStateToProps = ({ songInfo }) => {
  return ({
    currentSong: songInfo.currentSong,
    que: songInfo.que,
    pause: songInfo.pauseSong
  });
};


const mapDispatchToProps = dispatch => {
 return ({
   addToCurrentSongFromQue: () => dispatch(addToCurrentSongFromQue()),
   pauseSong: () => dispatch(pauseSong()),
   undoPauseSong: () => dispatch(undoPauseSong())
 });
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
