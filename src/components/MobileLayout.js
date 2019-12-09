import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import { Row, Col } from 'reactstrap';

import VideoTeaserTitle from './VideoTeaserTitle';
import Bio from './Bio';
import Footer from './Footer';

export default function MobileLayout(props) {
  let parallax;
  return (
    <Parallax ref={parallax} pages={2} style={props.parallaxBkgd}>
      <Row>
        <Col xs="12" className="mobile-background">
          <VideoTeaserTitle/>
        </Col>
      </Row>
      
      <Row>
        <Col xs="12">
          <div className="bio-album-cover">
            <img src="../img/album-cover.jpg" alt=""/>
          </div>
        </Col>
      </Row>
      <h1>Listen Now</h1>

      <Row>
        <Col xs="12">
          <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:3qQ0Zv5eTJIbeAnSHyxXef?si=Z8ivcjfHTMKoPb0eRCx6wg&size=detail&theme=light" width="350" height="56" scrolling="no" frameBorder="0" style={{border:'none', marginLeft: '2em', overflow:'hidden'}} allowtransparency="true" title="highs-and-lows-mobile"></iframe>
        </Col>
      </Row>

      <Row style={{marginTop: '1em'}}>
        <Col xs={{ size: 4, offset: 1 }} style={{marginLeft: '3em', paddingLeft: '0', paddingRight: '0'}}>
          <a href="http://bit.ly/highsandlows-googleplay">
            <img src="../img/google-play-badge.png" alt="Listen on Google Play" width="100%" height="80%"/>
          </a>
        </Col>
        <Col xs={{ size: 3}} style={{marginLeft: '0.8em', paddingRight: '15px'}}>
          <a href="http://bit.ly/highsandlows-itunes">
            <img src="../img/itunes-store-icon-blk.svg" alt="Get on iTunes" width="90%" height="80%"/>
          </a>
        </Col>
        <Col xs="2" style={{padding: '0'}}>
          <a href="http://bit.ly/highsandlows-applemusic">
            <img src="../img/apple-music-icon-blk.svg" alt="Listen on Apple Music" width="90%" height="80%"/>
          </a>
        </Col>
        <Col xs="2">
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <Bio />
        </Col>
      </Row>

      <Row className="footer-row">
        <Col xs="12">
          <Footer />
        </Col>
      </Row>
    </Parallax>
  )
}
