import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Row, Col } from 'reactstrap';

import VideoTeaserTitle from './VideoTeaserTitle';
import Bio from './Bio';
import Footer from './Footer';

export default function TabletLayout(props) {
  let parallax;
  return (
    <Parallax ref={parallax} pages={2} style={props.parallaxBkgd}>
      <Row>
        <Col md="12">
          <Parallax.Layer
            offset={0.5}
            speed={1.8}
            className="tablet-title-bkgd"
          >
          </Parallax.Layer>
        </Col>
      </Row>

      <Row>
        <Col md="12 text-center">
          <Parallax.Layer
            offset={0}
            speed={1.8}
          >
            <VideoTeaserTitle />
          </Parallax.Layer>
        </Col>
      </Row>

      <Row>
        <Col md="12">
          <Parallax.Layer offset={0.99} speed={0.6}>
            <div className="bkgd-img">
              <img src="../img/album-cover.jpg" alt=""/>
            </div>
          </Parallax.Layer>
        </Col>
      </Row>
        
      <Row>
        <Col md="12">
          <Parallax.Layer offset={1} speed={0.7} className="bkgd-bio" />
        </Col>
      </Row>

      <Row className="bio-row">
        <Col md="12" className="no-col-margin hide-album">
          <Parallax.Layer
            offset={1}
            speed={3}
            onClick={() => parallax.scrollTo(0)}
          >
            <div className="bio-album-cover">
              <img src="../img/album-cover.jpg" alt=""/>
            </div>
          </Parallax.Layer>
        </Col>
        
        <Col md="12" className="no-col-margin bio-mobile">
          <Parallax.Layer
              offset={1.19}
              speed={7}
          >
              <Bio />
          </Parallax.Layer>
        </Col>
      </Row>

      <Row className="footer-row">
        <Parallax.Layer
          offset={1.6}
          speed={1}
        >
          <Footer />
        </Parallax.Layer>
      </Row>
    </Parallax>
  )
}
