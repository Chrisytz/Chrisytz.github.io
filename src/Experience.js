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
        CiscoClick: [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
        OttawaClick:  [`var(--text-color)`, `none`],
        EXYClick: [`var(--text-color)`, `none`],
        VEXClick:  [`var(--text-color)`, `none`],
        job: "Cisco",
        Cisco: {
            Title: "Techincal Undergraduate Co-Op",
            Date: "May - August 2022",
            Content: "Tasked with automating configurations of Cisco routers and full-stack development of Yangsuite-Ondatra.",
            Bullet: [
                "Updated the IPv6 Performance Measurement API, designed and implemented configuration automation for Path Tracing and Path Assurance", 
                "Updated PM parsers using TextFSM and wrote scripts to improve interal workflow", 
                "Added multiple features to Yangsuite-Ondatra with the Django framework using Python, Javascript, YANG, and Tabulator"
            ]
        },
        Ottawa: {
            Title: "Lifeguard and Swim Instructor",
            Date: "August 2020 - June 2021",
            Content: "Was held accountable for the safety of patrons and created lessons plans with shortterm and longterm learning goals.",
            Bullet: [
                "Effective communication and problem solving in a professional environment", 
                "Participated in monthly trainings and performed life saving operations", 
                "Taught children from ages 2 - 15 swimming skills and water safety knowledge" 
            ]
        },
        EXY: {
            Title: "IT Developer",
            Date: "September 2020 - April 2022",
            Content: "Developed a wbeiste using HTML, CSS, and Javascript in a team environment to provide youth with relevant 21st century skills.",
            Bullet: [
                "Worked and communicated cross department to provide IT solutions", 
                "Implemented website designs on a weekly basis", 
                "Developed a discord bot to monitor the organization discord and to provide relavent information on important 21st century skills"
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
                            job: "Cisco", 
                            CiscoClick: [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
                            OttawaClick:  [`var(--text-color)`, `none`],
                            EXYClick: [`var(--text-color)`, `none`],
                            VEXClick:  [`var(--text-color)`, `none`]});}
                        }
                        style={{color: `${this.state.CiscoClick[0]}`, borderLeft: `${this.state.CiscoClick[1]}`}}> Cisco </button>
                        <button type='button' className='WorkExp' onClick={() => {this.setState({
                            job: "Ottawa", 
                            CiscoClick: [`var(--text-color)`, `none`],
                            OttawaClick:   [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
                            EXYClick: [`var(--text-color)`, `none`],
                            VEXClick:  [`var(--text-color)`, `none`]});}
                        }
                        style={{color: `${this.state.OttawaClick[0]}`, borderLeft: `${this.state.OttawaClick[1]}`}}> City of Ottawa </button>
                        <button type='button' className='WorkExp' onClick={() => {this.setState({
                            job: "EXY", 
                            CiscoClick: [`var(--text-color)`, `none`],
                            OttawaClick:  [`var(--text-color)`, `none`],
                            EXYClick:  [`var(--accent-color1)`, `5px solid var(--accent-color1)`],
                            VEXClick:  [`var(--text-color)`, `none`]});}
                        }
                        style={{color: `${this.state.EXYClick[0]}`, borderLeft: `${this.state.EXYClick[1]}`}}> EXY Society </button>
                        <button type='button' className='WorkExp' onClick={() => {this.setState({
                            job: "VEX", 
                            CiscoClick: [`var(--text-color)`, `none`],
                            OttawaClick:  [`var(--text-color)`, `none`],
                            EXYClick: [`var(--text-color)`, `none`],
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