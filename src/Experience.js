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
        SideFXClick: [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
        CampfireClick: [`var(--text-color)`, `none`],
        HavenClick: [`var(--text-color)`, `none`],
        CiscoClick: [`var(--text-color)`, `none`],
        WARGClick:  [`var(--text-color)`, `none`],
        EXYClick: [`var(--text-color)`, `none`],
        VEXClick:  [`var(--text-color)`, `none`],
        job: "SideFX",
        SideFX: {
            Title: "3D Software Developer",
            Date: "May 2024 - August 2024",
            Content: "Currently working on optimizing the APEX mirroring tool and developing critical features in the animate state for the Houdini 20.5 release",
            Bullet: [
                "Reduced mirroring time in Houdini by over 80% and enhanced user experience by profiling and optimizing the APEX mirroring tool for the H20.5 release with Tracy and Python",
                "Enabled users to efficiently apply mirror transforms in the animation state by developing a versatile baking system",
                "Decluttered the mirror tool interface by creating mirror plane rigs with APEX Nodes using Python and C++"
            ]
        },
        Campfire: {
            Title: "Software Developer",
            Date: "September 2023 - December 2023",
            Content: "Contributed to Unity tools, in game features and full stack web CMS at a YCombinator-backed startup.",
            Bullet: [
                "Increased development efficiency by 200% through integrating a boot-up state management tool in C# into the Unity Editor and in-game environment, allowing developers to enter the game at any state", 
                "Deployed and developed a Web CMS application with Vercel, TypeScript, Next.js, Node.js, Refine.js and Firebase to allow non-developers to create and edit LLM prompts", 
                "Contributed several full stack user facing features for a multiplatform live service MMO game implemented with Unity, DotNet and Firebase on a tight release schedule"
            ]
        },
        Haven: {
            Title: "Tools Programmer",
            Date: "January 2023 - April 2023",
            Content: "Tasked with designing, and implementing features for multiple content creation pipelines.",
            Bullet: [
                "Significantly optimized the default landscape and component data export from Unreal to Houdini by developing Unreal plugins in C++ and Python for the procedural generation pipeline", 
                "Achieved a 65% decrease in export time by optimizing core components of the cross-DCC mesh exporting pipeline", 
                "Significantly improved Blender workflow efficiency through artist collaboration and feature implementation within Rave"
            ]
        },
        Cisco: {
            Title: "Techincal Undergraduate Co-Op",
            Date: "May 2022 - August 2022",
            Content: "Tasked with automating configurations of Cisco routers and full-stack development of Yangsuite-Ondatra.",
            Bullet: [
                "Developed a GUI testing framework to allow users to write and execute test programs using Django, Python, Javascript, and Yang, significantly reducing testing time",
                "Streamlined development efficiency by over 55% by implementing a JSON configuration parser with optimized data sourcing and comprehensive test result visualization",
                "Updated the IPv6 Performance Measurement API, designed and implemented configuration automation for Path Tracing and Path Assurance", 
            ]
        },
        WARG: {
            Title: "Computer Vision Team Member",
            Date: "May 2022 - Present",
            Content: "Leading member of the computer vision team in the Waterloo Aerial Robotics Group design team.",
            Bullet: [
                "Developed an innovative solution to a complex drone routing problem using OR-Tools and Python to model and optimize routes with varying capacity and resource constraints", 
                "Refactored and developed machine learning programs using Python and YOLOv5", 
                "Updated and added parsing features to a QR-Code scanning module in Python" 
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
                            job: "SideFX",
                            SideFXClick: [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
                            CampfireClick: [`var(--text-color)`, `none`],
                            HavenClick: [`var(--text-color)`, `none`],
                            CiscoClick: [`var(--text-color)`, `none`],
                            WARGClick:  [`var(--text-color)`, `none`],
                            VEXClick:  [`var(--text-color)`, `none`]});}
                        }
                        style={{color: `${this.state.SideFXClick[0]}`, borderLeft: `${this.state.SideFXClick[1]}`}}> SideFX 
                    </button>
                    <button type='button' className='WorkExp' 
                        onClick={() => {this.setState({
                            job: "Campfire",
                            SideFXClick: [`var(--text-color)`, `none`],
                            CampfireClick: [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
                            HavenClick: [`var(--text-color)`, `none`],
                            CiscoClick: [`var(--text-color)`, `none`],
                            WARGClick:  [`var(--text-color)`, `none`],
                            VEXClick:  [`var(--text-color)`, `none`]});}
                        }
                        style={{color: `${this.state.CampfireClick[0]}`, borderLeft: `${this.state.CampfireClick[1]}`}}> Campfire 
                    </button>
                    <button type='button' className='WorkExp' 
                    onClick={() => {this.setState({
                        job: "Haven",
                        SideFXClick: [`var(--text-color)`, `none`],
                        CampfireClick: [`var(--text-color)`, `none`],
                        HavenClick: [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
                        CiscoClick: [`var(--text-color)`, `none`],
                        WARGClick:  [`var(--text-color)`, `none`],
                        VEXClick:  [`var(--text-color)`, `none`]});}
                    }
                    style={{color: `${this.state.HavenClick[0]}`, borderLeft: `${this.state.HavenClick[1]}`}}> Haven 
                    </button>
                    <button type='button' className='WorkExp' 
                    onClick={() => {this.setState({
                        job: "Cisco", 
                        SideFXClick: [`var(--text-color)`, `none`],
                        CampfireClick: [`var(--text-color)`, `none`],
                        HavenClick: [`var(--text-color)`, `none`],
                        CiscoClick: [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
                        WARGClick:  [`var(--text-color)`, `none`],
                        VEXClick:  [`var(--text-color)`, `none`]});}
                    }
                    style={{color: `${this.state.CiscoClick[0]}`, borderLeft: `${this.state.CiscoClick[1]}`}}> Cisco 
                    </button>
                    <button type='button' className='WorkExp' onClick={() => {this.setState({
                        job: "WARG", 
                        SideFXClick: [`var(--text-color)`, `none`],
                        CampfireClick: [`var(--text-color)`, `none`],
                        HavenClick: [`var(--text-color)`, `none`],
                        CiscoClick: [`var(--text-color)`, `none`],
                        WARGClick:   [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
                        VEXClick:  [`var(--text-color)`, `none`]});}
                    }
                    style={{color: `${this.state.WARGClick[0]}`, borderLeft: `${this.state.WARGClick[1]}`}}> WARG 
                    </button>
                    {/* <button type='button' className='WorkExp' onClick={() => {this.setState({
                        job: "VEX", 
                        SideFXClick: [`var(--text-color)`, `none`],
                        CampfireClick: [`var(--text-color)`, `none`],
                        HavenClick: [`var(--text-color)`, `none`],
                        CiscoClick: [`var(--text-color)`, `none`],
                        WARGClick:  [`var(--text-color)`, `none`],
                        VEXClick:   [`var(--accent-color1)`, `5px solid var(--accent-color1)`]});}
                    }
                    style={{color: `${this.state.VEXClick[0]}`, borderLeft: `${this.state.VEXClick[1]}`}}> VEX 
                    </button> */}
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