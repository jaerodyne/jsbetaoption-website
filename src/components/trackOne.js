import React, { Component } from 'react';
import { Link, Element, Events, scroll, scrollSpy, scroller } from 'react-scroll';
import '../index.css';

class TrackOne extends Component{

  constructor (props){
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);

      this.verseOne = this.verseOne.bind(this)
      this.verseTwo = this.verseTwo.bind(this)
      this.chorus = this.chorus.bind(this)
      this.verseThree = this.verseThree.bind(this)
      this.outro = this.outro.bind(this)
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>  
      scroller.scrollTo('scroll-container-second-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
      }
     ));

    goToContainer.then(() =>  
      scroller.scrollTo('scroll-container-third-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
      }
     ));

    goToContainer.then(() =>  
      scroller.scrollTo('scroll-container-fourth-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
      }
     ));
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

	verseOne() {
		return (
		  `
		  	In this place
				I found something
				I couldn’t bear to keep
				A secret buried deep
				In a man’s broken heart
		  `
	  )
	}

	verseTwo() {
		return (
		  `
				Doomed from the start
				A longing never to be realized
				A woman he idealized
				And unmet expectations
		  `
	  )
	}

	chorus() {
		return (
		  `
				Watch out boys
				Cause you’ll never have her
				Watch out boys
				Cause you’ll never catch her
		  `
	  )
	}

	verseThree() {
		return (
		  `
				And she’ll act like she didn’t notice
				Like you didn’t want this to turn out a different way
				Cause what you could you really say?
				Oh but you’ll keep trying
				Oh you swear she won’t get away
		  `
	  )
	}

	bridge() {
		return (
		  `
				And after all that you’ve done
				Well you still won’t be the one
				She wants forever
				Never means never
				And that’s just the way it is
				That’s just the way it is
		  `
	  )
	}

	outro() {
		return (
		  `
				But what’s it to you?
				(It’s not my place to say)
				What’s it to you?
				(It’s not my place to say)
		  `
	  )
	}

  render () {
    return (
      <div>
      	<div className="lyrics-nav">
	        <Link activeClass="active" to="verseOne" spy={true} smooth={true} duration={250} containerId="containerElement">
	          Verse 1
	        </Link>

	        <Link activeClass="active" to="verseTwo" spy={true} smooth={true} duration={250} containerId="containerElement">
	          Verse 2
	        </Link>

	        <Link activeClass="active" to="chorus" spy={true} smooth={true} duration={250} containerId="containerElement">
	          Chorus
	        </Link>

	        <Link activeClass="active" to="verseThree" spy={true} smooth={true} duration={250} containerId="containerElement">
	          Verse 3
	        </Link>

	        <Link activeClass="active" to="bridge" spy={true} smooth={true} duration={250} containerId="containerElement">
	          Bridge
	        </Link>

	        <Link activeClass="active" to="outro" spy={true} smooth={true} duration={250} containerId="containerElement">
	          Outro
	        </Link>
	      </div>
        
        <div className="lyrics-container">
        <Element name="lyricsText" className="element" id="containerElement" style={{
        	display: 'block',
          position: 'absolute',
          height:'600px',
          overflow:'scroll',
          marginBottom: '100px'
        }}>

          <Element name="verseOne" style={{
            marginBottom: '230px'
          }}>
          	<pre className="lyrics">
        		{this.verseOne()}
          	</pre>
          </Element>

          <Element name="verseTwo" style={{
            marginBottom: '200px'
          }}>
	         	<pre className="lyrics">
		      		{this.verseTwo()}
	        	</pre>
          </Element>

          <Element name="chorus" style={{
            marginBottom: '200px'
          }}>
         	<pre className="lyrics">
	      		{this.chorus()}
        	</pre>
          </Element>

          <Element name="verseThree" style={{
            marginBottom: '300px'
          }}>
         	<pre className="lyrics">
	      		{this.verseThree()}
        	</pre>
          </Element>

          <Element name="bridge" style={{
            marginBottom: '200px'
          }}>
         	<pre className="lyrics">
	      		{this.bridge()}
        	</pre>
          </Element>

          <Element name="outro" style={{
            marginBottom: '200px'
          }}>
         	<pre className="lyrics">
	      		{this.outro()}
        	</pre>
          </Element>

        </Element>
        </div>
      </div>
    );
  }
};

// <a onClick={this.scrollToTop}>To the top!</a>
export default TrackOne;