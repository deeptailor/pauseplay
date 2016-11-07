import { connect } from 'react-redux';
import AudioPlayer from './audio-player';
import {addToCurrentSongFromQue} from '../../actions/songs_actions'


const mapStateToProps = ({ songInfo }) => {
  return ({
    currentSong: songInfo.currentSong,
    que: songInfo.que
  });
};


const mapDispatchToProps = dispatch => {
 return ({
   addToCurrentSongFromQue: () => dispatch(addToCurrentSongFromQue())
 });
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
