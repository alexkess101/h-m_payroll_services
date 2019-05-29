import React, {Component} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import Navbar from './navbar';
import Contact from './contact';
import { Timeline, Tween } from 'react-gsap';
import { NavLink } from 'react-router-dom';

export default class Homepage extends Component {
    constructor() {
        super();
    
    }

    render() {
        return (
            <div className="homepage-container">
                <Navbar/>
                <div className="paralax-wrapper">
                
                <Controller>
                    <Scene classToggle={['.logo', 'show']} reverse={false}>
                        <Timeline>
                            <Tween
                                from={{top: '52%'}}
                                to={{top:'50%'}}
                            >
                            <div className="logo">
                                <img src="https://res-console.cloudinary.com/akbottega/thumbnails/v1/image/upload/v1558654450/SE0=/grid" alt="logo"/>
                            </div>
                            </Tween>
                        </Timeline>
                    </Scene>
                </Controller>
                </div>

                <div className="information-wrapper1">
                    <div className="title-wrapper">
                    
                        <div className="text">
                            Our Happy Customers
                            
                        </div>
                        <div id="trigger"/>
                    </div>

                    <div className="image-wrapper">
                        <div className="background-image-wrapper">
                            <div className="image-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia!
                            </div>
                        </div>
                        
                        <div className="background-image-wrapper">
                            <div className="image-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia!
                            </div>
                        </div>

                        <div className="background-image-wrapper">
                            <div className="image-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia!
                            </div>
                        </div>

                        <div className="background-image-wrapper">
                            <div className="image-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia!
                            </div>
                        </div>

                        <div className="background-image-wrapper">
                            <div className="image-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia!
                            </div>
                        </div>

                        <div className="background-image-wrapper">
                            <div className="image-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia!
                            </div>
                        </div>

                        <div className="background-image-wrapper">
                            <div className="image-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia!
                            </div>
                        </div>

                        <div className="background-image-wrapper">
                            <div className="image-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia!
                            </div>
                        </div>
                    </div>
                </div>

                <div className="information-wrapper2">
                    <div className="information-container2">
                        <div className="unique-box">
                            <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt=""/>

                            <div className="wrapper">
                                <div className="title-text">
                                    This is the title.
                                </div>

                                <div className="text-box">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At voluptatem labore rerum? Repudiandae rem, obcaecati quisquam molestiae iste tempore tenetur?
                                </div>
                            </div>
                            
                        </div>
                        <div className="unique-box">
                            <div className="text-box">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ea ab harum numquam laboriosam excepturi perferendis quisquam cumque eius pariatur.
                            </div>
                            <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt=""/>
                        </div>

                        <div className="unique-box">
                            <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt=""/>
                            <div className="text-box">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem accusamus aliquam placeat voluptates perspiciatis ullam sapiente pariatur nihil quisquam.
                            </div>
                        </div>

                        <div className="unique-box">
                            <div className="text-box">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quod quibusdam id eaque debitis accusamus, veniam magnam voluptate. Nemo, architecto!
                            </div>
                            <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt=""/>
                        </div>
                    </div>
                </div>
                
                <div className="information-wrapper3">
                    
                </div>

                <div className="information-wrapper4">
                    <div className="title-wrapper">
                        Get to know our team!
                    </div>
                    <div className="bio-container">
                        <div className="saftey">
                            <div className="bio-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1556228852-6d35a585d566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt=""/>
                            </div>

                            <div className="bio-wrapper">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus labore recusandae placeat at adipisci dicta. Dolor officiis unde expedita.
                            </div>
                        </div>

                        <div className="saftey">
                            <div className="bio-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1556228453-622594a86e9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt=""/>
                            </div>

                            <div className="bio-wrapper">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem, officiis, harum ex enim repellendus corporis animi quisquam consequatur dignissimos ducimus in minus?
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="information-container5">
                    <div className="information-wrapper5">
                        <div className="title-wrapper">
                            Testimonials
                        </div>

                        <div className="testimonial">
                            <div className="testimonail-name">
                                John Sanchez
                            </div>
                            <div className="quote">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro veritatis dolor natus aspernatur totam voluptatem non accusamus voluptatibus soluta culpa ipsa, inventore ea velit!"
                            </div>
                        </div>

                        <div className="testimonial">
                            <div className="testimonail-name">
                                Julian Bakersfieldsmithston
                            </div>
                            <div className="quote">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro veritatis dolor natus aspernatur totam voluptatem non accusamus voluptatibus soluta culpa ipsa, inventore ea velit!"
                            </div>
                        </div>

                        <div className="testimonial">
                            <div className="testimonail-name">
                                Edwardo Sanchez
                            </div>
                            <div className="quote">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro veritatis dolor natus aspernatur totam voluptatem non accusamus voluptatibus soluta culpa ipsa, inventore ea velit!"
                            </div>
                        </div>

                        <div className="testimonial">
                            <div className="testimonail-name">
                                Jimmy Sanchez
                            </div>
                            <div className="quote">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro veritatis dolor natus aspernatur totam voluptatem non accusamus voluptatibus soluta culpa ipsa, inventore ea velit!"
                            </div>
                        </div>
                    </div>
                </div>

                <Contact/>

                <div className="footer"></div>

            </div>
        )
    }
}