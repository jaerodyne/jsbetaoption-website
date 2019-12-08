import React, { Component, Fragment } from 'react';
import Parallax from 'react-springy-parallax';
import { Row, Col } from 'reactstrap';
import Responsive from 'react-responsive';

import VideoTeaserTitle from './VideoTeaserTitle';
import Bio from './Bio';
import Footer from './Footer';
import DesktopLayout from './DesktopLayout'

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class Home extends Component {

	render() {
		const parallaxBkgd = {
			backgroundColor: '#4a2f3c',
			opacity: '0.8'
		}
		return (
			<Fragment>
				<div>
					<Desktop>
						<DesktopLayout />
					</Desktop>

					<Tablet>
						<Parallax ref="parallax" pages={2} style={parallaxBkgd}>
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
										onClick={() => this.refs.parallax.scrollTo(0)}
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
					</Tablet>

					<Mobile>
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
					</Mobile>
				</div>
			</Fragment>
		)
	}
}

export default Home;