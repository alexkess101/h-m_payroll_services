import React, {Component} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';

export default class Navbar extends Component {
    constructor() {
        super();
    
    }

    render() {
        return (
            <div className='navbar-container'>
                <div className="navbar-wrapper">
                    <div className="logo-wrapper">
                        logo
                    </div>

                    <div className="links-wrapper">
                        links and stuff
                    </div>

                    <div className="social-media-wrapper">
                        some more links and stuff
                    </div>
                </div>
            </div>
        )
    }
}