import React from 'react';
import './Projects.css';

class Project extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            TextDelay: 0.1,
            textTransition: 0.7,
            zIndex: 2,
            infoDelay: 0.4,
            opacity: 0,
            rotate: 0,
            translateright: 0,
            translateleft: 0,
            scale: 1
        }
    }

    render() {
        return (
            <div className={`project ${ this.props.side }`}>
                <div 
                    className={`hexagon-text ${this.props.side}`} 
                    style={{zIndex: `${this.state.zIndex}`, transform: `translate(${this.state[`translate${this.props.side}`]}px) scale(${this.state.scale}, 1)`, transitionDuration: `${this.state.textTransition}s`}}
                >
                        <div className="project-banner"> {this.props.name}</div>
                        <div className={`project-tools ${this.props.side}`}> {this.props.tools}</div>
                </div>
                <div 
                    className={`hexagon ${this.props.name_one} ${this.props.side}`} 
                    onTransitionEnd={() => {this.setState({infoDelay: 0})}} 
                    onMouseEnter={() => {this.setState({TextDelay: 0.3, textTransition: 0.7, zIndex: -1, infoDelay: 0.4, opacity: 1, rotate: 8.5, translateright: 200, translateleft: -200, scale: 0.7});}} 
                    onMouseLeave={() => {this.setState({TextDelay: 0.1, textTransition: 0.5, zIndex: 2, infoDelay: 0, opacity: 0, rotate:0, translateright:0, translateleft:0, scale: 1});}}
                >
                    <div className="hexagon-hover" style={{transitionDelay: `${this.state.TextDelay}s`}}>
                        <div className="hexagon-info" style={{opacity: `${this.state.opacity}`, transitionDelay: `${this.state.infoDelay}s`}}> {this.props.text} </div>
                        <a href={this.props.link}  target="_blank"><button type='button' className='hexagon-button' style={{opacity: `${this.state.opacity}`, transitionDelay: `${this.state.infoDelay}s`}}> LEARN MORE </button></a>
                    </div>
                </div>
                <div className={`hexagon-border ${this.props.side}`} style={{transform: `rotate(${this.state.rotate}deg)`}}></div>
                
            </div>
        )
    }
}

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Projects">
                <div className="ProjectsTitle">
                    Projects
                    <div className="ProjectsUnderline">
                        <hr className="Line1"></hr>
                        <hr className="Line2"></hr>
                    </div>
                </div>
                <div className='HexagonsTable'>
                    <div className='Hexagons left'>
                        <Project side="left" name="SnapChef" tools="MERN Stack, Flask, YOLOv8, OpenAI API" name_one="snapchef" link="https://github.com/Chrisytz/SnapChef"
                            text="A full-stack application that generates personalized recipes based on real-time video of the user's pantry with a robust login and authentication system. The ingredients are identified using object detection and recipes are generated using OpenAI API calls."
                        />
                        <Project side="left" name="Blob Traffic" tools="Python, C++, OpenGL, NumPy, RL" name_one="blob" link="https://github.com/antholuo/Blob_Traffic"
                            text="A pathfinding simulation of multiple agents trained via reinforcement learning (q-table). The simulation was done using OpenGL and Blender, and the reinforcement learning using Open AI Gym and numpy."
                        />
                        <Project side="left" name="Colour of Hue" tools="Python" name_one="colour" link="https://github.com/Chrisytz/I-Love-Hue-python-ver"
                            text="Designed a multi-level game inspired by I Love Hue. Written in Python using Pygame for the interface, sqlite4 to keep track of user info and multi-processing to run game and music."
                        />
                        {/* <Project side="left"  name="MsgGuard" tools="HTML/CSS/JS" name_one="msgguard" link="https://devpost.com/software/msgguard"
                            text="A Discord censoring bot written as a team using node.js, discord.js and mysql. Also built an accompanying website using HTML/CSS/JS to educate users on the dangers of inappropriate language."
                        /> */}
                    </div>
                    <div className="Hexagons right">
                        <Project side="right"  name="LoL Power Rankings" tools="Python, Pandas, AWS Gateway and Lambda" name_one="lol" link="https://github.com/Chrisytz/League_Hack"
                            text="A League of Legends team power rankings REST API written in Python and deployed using AWS. We used Pandas, XGBoost models and an ELO system to predict team strength and used AWS Gateway and AWS Lambda to manage get and post requests."
                        />
                        <Project side="right"  name="HopiBot" tools="HTML/CSS/JS, Python" name_one="hopibot" link="https://devpost.com/software/hospital-bot"
                            text="A chatbot designed as a team to improve process of admitting patients to hospitals. Flask and SQL were used for the chatbot and Twilio and Google Maps API to send text messages to patients."
                        />

                        <Project side="right"  name="Alchemy Shop" tools="C++" name_one="alchemy" link="https://github.com/Chrisytz/AlchemyShopGUI"
                            text="A pixel art game inspired by Little Alchemy written in C++, using pointers and OOP. Developed an interactive GUI using Qt and created pixel art. Worked in a team of 3. "
                        />
                        {/* <Project side="right"  name="Sudoku Solver" tools="Python" name_one="sudoku" link="https://github.com/Chrisytz/Sudoku"
                            text="An interactive Sudoku GUI made using Pygame that can check each of the user's move and solve the grid on demand. Implemented in Python using a backtracking algorithm." 
                        /> */}
                    </div>
                </div>
                
               
            </div>
        )
    }
}

export default Projects