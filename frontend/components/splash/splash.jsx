import React from 'react';
import { Link, withRouter } from 'react-router';

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
          <div onClick={this.routerPush(album.id)} className="album-overlay">
            <span className="full-album-span">
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
            <h1 className="logo">II<span className="play">></span></h1>
            <br/>
            <h1>MUSIC FOR EVERYONE</h1>
          </div>

          <div className="splash-album-container">
            <div className="whats-new-splash" onClick={(e)=>window.scrollBy(0,window.innerHeight)}><i className="material-icons">keyboard_arrow_down</i></div>
            <ul className="splash-albums-ul">
            {this.renderAlbums()}
            </ul>
          </div>

          <div className="splash-footer-container" id="footer">
            <div className="splash-footer-inner-container">
              <ul className="splash-footer-ul-left">
                <li><a href="https://www.linkedin.com/in/deep-tailor-16b0a660?trk=hp-identity-photo"><img className="contact-logo" src="https://res.cloudinary.com/deeptailor/image/upload/v1478383632/logos/In-White-128px-TM_uk1amf.png"/></a></li>
                <li><a href="https://github.com/dtailor90"><img className="contact-logo" src="https://res.cloudinary.com/deeptailor/image/upload/v1478383625/logos/GitHub-Mark-Light-120px-plus_x9kzyx.png"/></a></li>
                <li><a href="mailto:deeptailor@gmail.com"><i className="material-icons">email</i></a></li>
              </ul>
              <ul className="splash-footer-ul-center">
                <li>Designed And Developed by Deep Tailor</li>
              </ul>
              <ul className="splash-footer-ul-right">
                <Link to="/" onClick={window.scrollTo(0,0)}>PA<span className='pause'>II</span>SEPL<span className="play">></span>Y<span className="tm">&reg;</span></Link>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Splash);
