import React, { Component } from 'react';
import Nea from './nea.jpeg'
import Sam from './Sam.jpeg'

class About extends Component {
    render() {
        return (
            <div>
                <h1>About Me</h1>
                <p>My wife and I share this unmeasurable love for dogs. Seven years ago we got our first baby-boy. His name is Sam. Sam is a little Yorkie Terrier. He is the best companion for the outdoors activities. He is a part of our family and he means the world to us. However, resently we desided to expand the family and adopted another Yorkie named Nea. We call her a Tasmania Devil. Nea causes havoc everywhere she goes. She is a perfect addition to our small and quiet family. Since my wife and I enjoy snowboarding, kayaking and hiking the dogs are living their best life.</p>
                <img className="imgDog" src={Nea} alt="cute dog"/><img className="imgDog" src={Sam} alt="cute dog"/>
            </div>
        )
    }
}

export default About;
