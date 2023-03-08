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
                <p> I'm a 2A Computer Science student at the Univeristy of Waterloo specializing in digital hardware.
                I'm looking for new opportunities for Winter 2023.</p>
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