import React from 'react';

const albumStyle = (imgUrl) =>({
  backgroundImage: 'url(' + imgUrl + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
})



class Albums extends React.Component {
  constructor(props){
    super(props)
    this.renderSongs = this.renderSongs.bind(this);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.params.album_id)
  }

  renderSongs(){
    if(this.props.songs){
      return this.props.songs.map(song =>
        <li key= {`song-${song.id}`}>
          {song.title}
        </li>)
    }
  }

  render(){
    let album_art_url = '';
    let album_name = '';
    if(this.props.album){
      album_art_url = this.props.album.album_art_url;
      album_name = this.props.album.name;
    }
    return (
      <div className="albums-showpage-container">

        <div className="albums-showpage-right-column">
          <div className="album-art-container" style={albumStyle(album_art_url)}>
          </div>
          <div className="albums-showpage-album-name">{album_name}</div>
        </div>
        
        <div className="song-list-container">
          <ol className="song-list-ol">
            {this.renderSongs()}
          </ol>
        </div>

      </div>
    )
  }
}

export default Albums;
