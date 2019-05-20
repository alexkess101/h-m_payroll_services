import React, {Component} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';
import { Link, Events, scrollSpy } from 'react-scroll';

export default class Navbar extends Component {
    constructor() {
        super();
    
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
          });
      
          Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
          });
      
          scrollSpy.update();
    }

    componentWillMount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div className='navbar-container'>
                <div className="navbar-wrapper">
                    <div className="links-wrapper">
                        <img src="#" alt="logo"/>
                        <Link activeClass="active" className="link" to="Link 1" spy={true} smooth={true} duration={500} >Link 1</Link>
                        <Link activeClass="active" className="link" to="Link 2" spy={true} smooth={true} duration={500} >Link 2</Link>
                        <Link activeClass="active" className="link" to="Link 3" spy={true} smooth={true} duration={500} >Link 3</Link>
                        <Link activeClass="active" className="link" to="Link 4" spy={true} smooth={true} duration={500} >Link 4</Link>
                    </div>

                    <div className="social-media-wrapper">
                        <a href="#"><img src="https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png" alt="insta-logo"/></a>
                        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png" alt="facebook-logo"/></a>
                        <a href="#"><img src="https://www.peergrade.io/wp-content/uploads/2017/06/twitter.png" alt="twitter-logo"/></a>
                    </div>
                </div>
            </div>
        )
    }
}