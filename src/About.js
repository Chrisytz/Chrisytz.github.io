import React from "react";
import "./About.css";
import profile from './content/profile.jpg';
function Skill(props) {
    return (
        <div>
            <div className = "SkillText"> 
                <div className="SkillName"> {props.skillName} </div> 
                <div className="SkillPercent"> {props.percentage} </div>
            </div>
            <div className="SkillBox">
                <div className={"Skill " + props.name}>  </div>
            </div>
        </div>
    )
}
function Content() {
    return (
        <div className="AboutWrapper">
            <div className="Left">
                <img className="Img" src={profile} alt="profile picture"></img>
                <div className="Img-border"></div>
                <div className="AboutTitle">
                    About Me
                    <div className="AboutUnderline">
                        <hr className="Line1"></hr>
                        <hr className="Line2"></hr>
                    </div>
                </div>
                <div className="About-blurb">
                
                    Hi, I'm Christina and I am passionate about creating  <span style={{color: `var(--text-accent)`}}> visual coding projects. </span>
                    I've loved art since I was a kid, and after being introduced to programming in grade, 11 I began  
                    <span style={{color: `var(--text-accent)`}}> building websites</span>,   
                    <span style={{color: `var(--text-accent)`}}> designing games</span>,  
                    <span style={{color: `var(--text-accent)`}}> applying algorithms </span> and,  
                    <span style={{color: `var(--text-accent)`}}> creating simulations</span>. 
                    You can check out some of my projects below!

                    I just finished my first Co-op term at <span style={{color: `var(--text-accent)`}}> Cisco Systems </span> and am looking for new opportunities in January 2023.

                </div>
            </div>
            <div className="Right">
                <div className="RightCenter">
                    <div className="Skills-blurb">
                        Here are my confidence levels with some languages and frameworks I’ve learnt. 
                        I'm always ready to add a new skill to this list!
                    </div>
                    <div className="Stats">
                        <Skill name="Python" skillName="Python" percentage="80%" />
                        <Skill name="Cpp" skillName="C/C++" percentage="70%" />
                        <Skill name="CSS" skillName="HTML/CSS/JS" percentage="70%" />
                        <Skill name="Racket" skillName="Java" percentage="50%" />
                        <Skill name="Django" skillName="Django" percentage="60%" />
                        <Skill name="React" skillName="React" percentage="50%" />
                    </div>
                </div> 
            </div>
        </div>
    );
}
function About() {
    return (
        <div className="About">
            <Content />
        </div>
    );
}

export default About