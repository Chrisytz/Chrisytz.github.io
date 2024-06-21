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
                    Hey there! I'm Christina, a third-year computer science student at the University of Waterloo. I'm currently working at SideFX for my fourth internship, developing and optimizing procedural 3D animation tools for the Houdini 20.5 release. 
                    
                    Beyond that, my project portfolio reflects my passion and diverse interests as I've worked on many projects ranging from a full-stack application that uses machine learning to detect foods and generate recipes, to a video game inspired by one of my favourite mobile games, to a reinforcement learning simulation. You can check out some of these below! 
                    
                    In my free time, I love to rock climb, figure skate and create art! I'm currently seeking Summer 2025 internships, and I'd be excited to hear from your team if you think I'd be a good fit!

                            {/* Hey there, I'm Christina! I just completed my third internship at a Y-Combinator backed startup named Campfire where I developed a full-stack CMS app to manage LLM prompts and contributed new tools and features to our AI chat product. */}
                </div>
            </div>
            <div className="Right">
                <div className="RightCenter">
                    <div className="Skills-blurb">
                        Here are my confidence levels with some languages and frameworks I’ve learnt. 
                        I'm always ready to add a new skill to this list!
                    </div>
                    <div className="Stats">
                        <Skill name="Python" skillName="Python" percentage="90%" />
                        <Skill name="Cpp" skillName="C/C++" percentage="70%" />
                        <Skill name="CSharp" skillName="C#" percentage="80%" />
                        <Skill name="Javascript" skillName="Javascript/Typescript" percentage="70%" />
                        <Skill name="Java" skillName="Java" percentage="40%" />
                        <Skill name="Django" skillName="Django" percentage="40%" />
                        <Skill name="React" skillName="React" percentage="70%" />
                        <Skill name="AWS" skillName="AWS" percentage="70%" />
                        <Skill name="NodeJS" skillName="NodeJS" percentage="80%" />
                        <Skill name="TensorFlow" skillName="TensorFlow" percentage="70%" />
                        <Skill name="Unity" skillName="Unity" percentage="80%" />
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