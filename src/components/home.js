import React, { useRef } from 'react';

import Responsive from 'react-responsive';
import DesktopLayout from './DesktopLayout';
import TabletLayout from './TabletLayout';
import MobileLayout from './MobileLayout';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const parallaxBkgd = {
	backgroundColor: '#4a2f3c',
	opacity: '0.8'
}

export default function Home() {
	const parallaxRef = useRef("parallax")

	return (
		<div>
			<Desktop>
				<DesktopLayout style={parallaxBkgd} parallaxRef={parallaxRef} />
			</Desktop>

			<Tablet>
				<TabletLayout style={parallaxBkgd} parallaxRef={parallaxRef} />
			</Tablet>

			<Mobile>
				<MobileLayout style={parallaxBkgd} parallaxRef={parallaxRef} />
			</Mobile>
		</div>
	)
}