import React from 'react';
import { Link } from 'react-router';

// to={`albums/${album.id}`}
const albumStyle = (imgUrl) =>({
  backgroundImage: 'url(' + imgUrl + ')',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
})

class Splash extends React.Component{
  constructor(props){
    super(props)
    this.renderAlbums = this.renderAlbums.bind(this);
    this.routerPush = this.routerPush.bind(this);
  }

  componentWillMount(){
    this.props.fetchAlbums();
  }

  routerPush(id){
    return () => this.props.router.push(`albums/${id}`);
  }

  renderAlbums(){
    return this.props.albums.map(
      album =>
      <li key={`album-${album.id}`}>
        <div className="album-art-container" style={albumStyle(album.album_art_url)}>
          <div className="album-overlay">
            <span onClick={this.routerPush(album.id)} className="full-album-span">
              <p className="full-album-text">Full Album</p>
            </span>
            <p className="overlay-album-name">{album.name}</p>
          </div>
        </div>
      </li>
    )
  }

  render(){
    return (
      <div className="splash-container">

        <div className="top-image-container">
          <div className="overlay-text">
            <h1 className="logo">II></h1>
            <br/>
            <h1>MUSIC FOR EVERYONE</h1>
          </div>

          <div className="splash-album-container">
            <ul className="splash-albums-ul">
            {this.renderAlbums()}
            </ul>
          </div>

          <div className="splash-footer-container">
            <div className="splash-footer-inner-container">
              <ul className="splash-footer-ul-left">
                <li>About</li>
                <li>Contact</li>
              </ul>
              <ul className="splash-footer-ul-center">
                <li>Designed And Developed by Deep Tailor</li>
              </ul>
              <ul className="splash-footer-ul-right">
                <Link to="/" onClick={window.scrollTo(0,0)}>PAU<span className='pause'>II</span>SEPLA<span className="play">></span>Y<span className="tm">&reg;</span></Link>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Splash;
