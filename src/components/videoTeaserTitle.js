import React from 'react'
// import Transition from 'react-transition-group/Transition'

const duration = 1000

const defaultStyle = {
	transition: `background ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
	opacity: 0,
	padding: '10px'
}

const transitionStyles = {
	entering: { opacity: 1, background: 'lightgreen'},
	entered: { opacity: 1 }
}

const VideoTeaserTitle = () =>
	<div className="background-video-title">
		<h1>Jillian Somera and the Beta Option</h1>
		<h2>The Making of Highs and Lows</h2>
	</div>

export default VideoTeaserTitle;