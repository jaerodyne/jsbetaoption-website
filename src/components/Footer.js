import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Footer = () =>
	<div className="footer">
		<ul>
			<li><a href="https://www.facebook.com/jilliansomeramusic/"><FontAwesomeIcon icon={["fab", "facebook"]} /></a></li>
			<li><a href="https://www.instagram.com/jsbetaoption"><FontAwesomeIcon icon={["fab", "instagram"]}/></a></li>
			<li><a href="https://open.spotify.com/album/76UmyyHrUavg49MOzx77wE?si=abq_xRcXSiS_V5EubARiJg"><FontAwesomeIcon icon={["fab", "spotify"]}/></a></li>
			<li><a href="https://www.youtube.com/channel/UCc2YiqbLtDfHZrBc2aoDD6A"><FontAwesomeIcon icon={["fab", "youtube"]} /></a></li>
		</ul>
		<p className="copyright">&#169;2019 Jillian Somera</p>
	</div>

export default Footer;