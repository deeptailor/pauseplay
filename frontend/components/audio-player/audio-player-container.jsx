import { connect } from 'react-redux';
import AudioPlayer from './audio-player';


const mapStateToProps = ({ songInfo }) => {
  return ({
    currentSong: songInfo.currentSong
  });
};


const mapDispatchToProps = dispatch => {
 return ({

 });
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
