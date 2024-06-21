import React from 'react';
import './Landing.css';

function Intro() {
    return (
        <div className="Intro">
            <div className='Name first'>
                Christina
            </div>
            <div className='Name last'>
                Zhang
            </div>
            <div className="LandingUnderline">
                        <hr className="LandingLine1"></hr>
                        <hr className="LandingLine2"></hr>
            </div>
            <div className='Blurb'>
                <p> Hi! I'm a passionate computer science student at the University of Waterloo with over 5 years of development exerperience, currently looking for Summer 2025 opportunities.</p>
            </div>
        </div>
    );
}
function Landing() {
    return (
        <div className='Landing'>
            <Intro />
        </div>

    );
}

export default Landing;