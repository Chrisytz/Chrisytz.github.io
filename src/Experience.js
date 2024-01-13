import React from 'react';
import './Experience.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function getBullets(bullets) {
    var ret = [];
    var i;
    for (i = 0; i < bullets.length; i++) {
        ret[i] = (
            <div className='Bullets'>
                <ArrowRightIcon className='BulletPoint' style={{fontSize: `large`}}/>
                <div className='JobBullet'> {bullets[i]} </div>
            </div>
        );
    }
    return ret;
}

class Experience extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        CampfireClick: [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
        HavenClick: [`var(--text-color)`, `none`],
        CiscoClick: [`var(--text-color)`, `none`],
        WARGClick:  [`var(--text-color)`, `none`],
        EXYClick: [`var(--text-color)`, `none`],
        VEXClick:  [`var(--text-color)`, `none`],
        job: "Campfire",
        Campfire: {
            Title: "Software Developer",
            Date: "September 2023 - December 2023",
            Content: "Contributed to Unity tools, in game features and full stack web CMS at a YCombinator-backed startup.",
            Bullet: [
                "Developed a full stack web CMS app for management of LLM prompts using Typescript, Next.js, RefineJS, Firebase and vercel, building a robust and scalable framework", 
                "Engineered and integrated a bootup state management tool in C# into the Unity Editor and in-game environment to increasing overall development efficiency", 
                "Contributed several full stack user facing features for a multiplatform live service MMO game implemented with Unity, DotNet and Firebase on a tight release schedule"
            ]
        },
        Haven: {
            Title: "Tools Programmer",
            Date: "January 2023 - April 2023",
            Content: "Tasked with designing, and implementing features for multiple content creation pipelines.",
            Bullet: [
                "Designed and developed Unreal plugins to export landscape and component data from Unreal for the procedural generation pipeline in C++ and Python", 
                "Worked with the Blender API in Python, adding multiple features to an asset production pipeline to improve the usability and efficiency of its mesh exporting system", 
                "Collaborated effectively with artists to implement new features in Raven, enhancing their workflow efficiency within Blender by over 75%"
            ]
        },
        Cisco: {
            Title: "Techincal Undergraduate Co-Op",
            Date: "May 2022 - August 2022",
            Content: "Tasked with automating configurations of Cisco routers and full-stack development of Yangsuite-Ondatra.",
            Bullet: [
                "Updated the IPv6 Performance Measurement API, designed and implemented configuration automation for Path Tracing and Path Assurance", 
                "Updated PM parsers using TextFSM and wrote scripts to improve interal workflow", 
                "Added multiple features to Yangsuite-Ondatra with the Django framework using Python, Javascript, YANG, and Tabulator"
            ]
        },
        WARG: {
            Title: "Computer Vision Team Member",
            Date: "May 2022 - Present",
            Content: "Active member of the computer vision sub team in the WARG design team.",
            Bullet: [
                "Refactored and developed machine learning programs using Python and YOLOv5", 
                "Used OR-Tools to model a drone routing problem with capacity and resource constraints", 
                "Updated and added parsing features to a QR-Code scanning module in Python" 
            ]
        },
        VEX: {
            Title: "2381Z Robotics Member",
            Date: "May 2019 - March 2021",
            Content: "Member of an international award-winning team VEX Robotics team, worked on designing, building and programing the robot",
            Bullet: [
                "Continually innovated and designed the VEX robot over the course of a year based on the performance of previous iterations", 
                "Implemented robot designs and worked as a team to come up with many creative solutions when traditional methods failed", 
                "Worked on computer vision tracking programs in bi-daily meetings" 
            ]
        },
    };
    }

    render() {
        return (
            <div className='Experience'>
                <div className="ExperienceTitle">
                    Work Experience
                    <div className="ExperienceUnderline">
                        <hr className="Line1"></hr>
                        <hr className="Line2"></hr>
                    </div>
                </div>
                <div className='ExperienceContent'>
                    <div className='WorkButtons'>
                    <button type='button' className='WorkExp' 
                        onClick={() => {this.setState({
                            job: "Campfire",
                            CampfireClick: [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
                            HavenClick: [`var(--text-color)`, `none`],
                            CiscoClick: [`var(--text-color)`, `none`],
                            WARGClick:  [`var(--text-color)`, `none`],
                            VEXClick:  [`var(--text-color)`, `none`]});}
                        }
                        style={{color: `${this.state.CampfireClick[0]}`, borderLeft: `${this.state.CampfireClick[1]}`}}> Campfire </button>
                        <button type='button' className='WorkExp' 
                        onClick={() => {this.setState({
                            job: "Haven",
                            CampfireClick: [`var(--text-color)`, `none`],
                            HavenClick: [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
                            CiscoClick: [`var(--text-color)`, `none`],
                            WARGClick:  [`var(--text-color)`, `none`],
                            VEXClick:  [`var(--text-color)`, `none`]});}
                        }
                        style={{color: `${this.state.HavenClick[0]}`, borderLeft: `${this.state.HavenClick[1]}`}}> Haven </button>
                        <button type='button' className='WorkExp' 
                        onClick={() => {this.setState({
                            job: "Cisco", 
                            CampfireClick: [`var(--text-color)`, `none`],
                            HavenClick: [`var(--text-color)`, `none`],
                            CiscoClick: [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
                            WARGClick:  [`var(--text-color)`, `none`],
                            VEXClick:  [`var(--text-color)`, `none`]});}
                        }
                        style={{color: `${this.state.CiscoClick[0]}`, borderLeft: `${this.state.CiscoClick[1]}`}}> Cisco </button>
                        <button type='button' className='WorkExp' onClick={() => {this.setState({
                            job: "WARG", 
                            CampfireClick: [`var(--text-color)`, `none`],
                            HavenClick: [`var(--text-color)`, `none`],
                            CiscoClick: [`var(--text-color)`, `none`],
                            WARGClick:   [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
                            VEXClick:  [`var(--text-color)`, `none`]});}
                        }
                        style={{color: `${this.state.WARGClick[0]}`, borderLeft: `${this.state.WARGClick[1]}`}}> WARG </button>
                        <button type='button' className='WorkExp' onClick={() => {this.setState({
                            job: "VEX", 
                            CampfireClick: [`var(--text-color)`, `none`],
                            HavenClick: [`var(--text-color)`, `none`],
                            CiscoClick: [`var(--text-color)`, `none`],
                            WARGClick:  [`var(--text-color)`, `none`],
                            VEXClick:   [`var(--accent-color1)`, `5px solid var(--accent-color1)`]});}
                        }
                        style={{color: `${this.state.VEXClick[0]}`, borderLeft: `${this.state.VEXClick[1]}`}}> VEX </button>
                    </div>
                    <div className="WorkContent">
                        <div className="JobTitle"> {this.state[this.state.job].Title} </div>
                        <div className="JobDate"> {this.state[this.state.job].Date} </div>
                        <div className="JobContent"> {this.state[this.state.job].Content} </div>
                        {getBullets(this.state[this.state.job].Bullet)}

                    </div>
                </div>
            </div>
        );
    }
  }

export default Experience