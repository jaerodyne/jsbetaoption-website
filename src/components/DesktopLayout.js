import React, { useState } from 'react';
import Script from 'react-load-script';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import { Row, Col } from 'reactstrap';

import VideoTeaser from './VideoTeaser';
import VideoTeaserTitle from './VideoTeaserTitle';
import Bio from './Bio';
import Footer from './Footer';

export default function DesktopLayout(props) {
  
  const [loadedState, setLoadedState] = useState(false)
  const toggleLoadedState = () => setLoadedState(!loadedState);
  
  const [errorState, setErrorState] = useState(false)
  const toggleErrorState = () => setErrorState(!errorState);

  let parallax;

  return (
    <Parallax pages={4} ref={ref => parallax = ref}>
      <Row>
        <Col md="12">
          <ParallaxLayer offset={0.6} speed={0.6}>
            <div className="bkgd-img">
              <img src="/img/album-cover-background.jpg" alt=""/>
            </div>
          </ParallaxLayer>
        </Col>
      </Row>

      <Row>
        <Col sm="12">
          <ParallaxLayer
            offset={0}
            speed={2}
          >
            <VideoTeaser />
          </ParallaxLayer>
        </Col>	
      </Row>

      <Row>
        <Col sm="12 text-center">
          <ParallaxLayer
            offset={0}
            speed={1.8}
            onClick={() => parallax.scrollTo(0.4)}
          >
            <VideoTeaserTitle />
          </ParallaxLayer>
        </Col>
      </Row>
      
      <Row>
        <ParallaxLayer
          offset={0.9}
          speed={1.1}
          onClick={() => parallax.scrollTo(1)}
        >
          <div className="album-title-header">
            <h1>Highs and Lows</h1>
          </div>
        </ParallaxLayer>
      </Row>

      <Row>
        <Col md="12">
          <ParallaxLayer offset={1} speed={0.7}>
            <div className="bkgd-img">
              <img src="../img/album-cover-background-2.jpg" alt=""/>
            </div>
          </ParallaxLayer>
        </Col>
      </Row>

      <Row>
        <Col sm="12">
          <ParallaxLayer offset={1} speed={0.7} style={props.parallaxBkgd} />
        </Col>
      </Row>
      
      <Row>
        <ParallaxLayer
          offset={1.05}
          speed={4}
          onClick={() => parallax.scrollTo(2)}
        >
          <Col sm="12" style={{marginLeft: '20px'}}>
            <h1 className="text-center" style={{color: 'white'}}>DEBUT ALBUM AVAILABLE NOW</h1>	
            <h2 className="text-center" style={{color: 'white'}}>ON ALL MAJOR STREAMING PLATFORMS</h2>	
          </Col>
        </ParallaxLayer>
      </Row>

      <Row>
        <Col md="4 text-right">
          <ParallaxLayer
            offset={1.2}
            speed={1.1}
          >
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.3}
            speed={1.1}
          >
            <Col sm="12">
              <a href="http://bit.ly/highsandlows-amazon">
                <img src="../img/amazon-logo-grey.png" alt="Listen on Amazon" width="35%" height="35%"style={{padding: '6px'}}/>
              </a>
            </Col>
          </ParallaxLayer>

          <ParallaxLayer
              offset={1.46}
              speed={1.1}
          >
            <Col sm="12">
              <a href="http://bit.ly/highsandlows-itunes">
                <img src="../img/us-uk-itunes-store-get-badge-rgb-012618.svg" alt="Get on iTunes" width="35%" height="35%" style={{padding: '7px'}}/>
              </a>
            </Col>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.58}
            speed={1.1}
          >
            <Col sm="12">
              <a href="http://bit.ly/highsandlows-applemusic">
                <img src="../img/us-uk_apple_music_badge_rgb.svg" alt="Listen on Apple Music" width="35%" height="35%" style={{padding: '7px'}}/>
              </a>
            </Col>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.7}
            speed={1.1}
          >
            <Col sm="12">
              <a href="http://bit.ly/highsandlows-googleplay">
                <img src="../img/google-play-badge.png" alt="Listen on Google Play" width="35%" height="35%" style={{padding: '6px'}}/>
              </a>
            </Col>
          </ParallaxLayer>
        </Col>

        <Col md="4" className="text-center">
          <ParallaxLayer
            offset={1.27}
            speed={1}
          >
            <div>
              <iframe src="https://open.spotify.com/embed?uri=spotify:album:76UmyyHrUavg49MOzx77wE" width="350" height="360" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="highs-and-lows-spotify"></iframe>
              <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:3qQ0Zv5eTJIbeAnSHyxXef?si=Z8ivcjfHTMKoPb0eRCx6wg&size=detail&theme=dark" width="350" height="56" scrolling="no" frameBorder="0" style={{border:'none', marginTop: '10px', overflow:'hidden'}} allowtransparency="true" title="highs-and-lows-spotify-follow"></iframe>
            </div>
          </ParallaxLayer>
        </Col>

        <Col md="4">
          <ParallaxLayer
            offset={1.3}
            speed={1.1}
          >
            <Col sm="12" style={{paddingLeft: '11px'}}>
              <a href="http://bit.ly/highsandlows-album">
                <img src="../img/bandcamp-logotype-light-128.png" alt="Listen on Bandcamp" width="45%" height="45%" />
              </a>
            </Col>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.45}
            speed={1.1}
          >
            <Col sm="12" style={{paddingLeft: '25px'}}>
              <a href="http://bit.ly/highsandlows-tidal">
                <img src="../img/tidal-logo.png" alt="Listen on Tidal" width="40%" height="40%" />
              </a>
            </Col>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.56}
            speed={1.1}
          >
            <Col sm="12" style={{paddingLeft: '25px'}}>
              <a href="http://bit.ly/highsandlows-youtube">
                <img src="../img/yt_logo_mono_dark.png" alt="Listen on Youtube" width="40%" height="40%" style={{padding: '7px'}}/>
              </a>
            </Col>
          </ParallaxLayer>

          <ParallaxLayer
              offset={1.7}
              speed={1.1}
          >
            <Col sm="12" style={{paddingLeft: '25px'}}>
              <img src="../img/pandora_wordmark_white.png" alt="Listen on Pandora" width="41%" height="41%" style={{opacity: '0.3', padding: '7px'}}/>
              <span style={{color: 'white'}}>COMING SOON</span>
            </Col>
          </ParallaxLayer>
        </Col>
      </Row>

      <Row>
        <Col sm="12">
          <ParallaxLayer
            offset={2.09}
            speed={1}
          >
            <div className="show-dates-bkgd">
              <img src="../img/album-show-recap.jpg" alt=""/>
            </div>
          </ParallaxLayer>
        </Col>	
      </Row>

      <Row style={{textAlign: 'center', fontSize: '18px', marginRight: '15px'}}>
        <Col sm={12}>
          <ParallaxLayer
            offset={2.25}
            speed={0.1}
          >
            <a href="https://www.songkick.com/artists/9718779" className="songkick-widget" data-theme="dark" data-track-button="on" data-detect-style="true" data-background-color="transparent" data-font-color="#eeeded">Show Dates</a>
            <Script
              url="//widget.songkick.com/9718779/widget.js"
              onError={toggleErrorState}
              onLoad={toggleLoadedState}
            />
          </ParallaxLayer>
        </Col>
      </Row>

      <Row>
        <Col sm="12" style={{marginTop: '-10px'}}>
          <ParallaxLayer
            offset={3}
            speed={1}
            style={{backgroundColor: 'white'}}
          >
          </ParallaxLayer>
        </Col>
      </Row>

      <Row className="bio-row">
        <Col sm="12" md="5" className="no-col-margin hide-album">
          <ParallaxLayer
            offset={3}
            speed={3}
            onClick={() => parallax.scrollTo(1)}
            style={{backgroundColor: 'white'}}
          >
            <div className="bio-album-cover">
              <img src="../img/album-cover.jpg" alt=""/>
            </div>
          </ParallaxLayer>
        </Col>
        
        <Col sm="12" md="7" className="no-col-margin bio-mobile">
          <ParallaxLayer
              offset={3}
              speed={7}
              style={{backgroundColor: 'white'}}
          >
              <Bio />
          </ParallaxLayer>
        </Col>
      </Row>

      <Row className="footer-row">
        <ParallaxLayer
          offset={3.65}
          speed={1}
        >
          <Footer />
        </ParallaxLayer>
      </Row>
    
    </Parallax>
  )
}