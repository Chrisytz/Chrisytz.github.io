import React from 'react';
import './App.css';
import Landing from './Landing'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from './content/resume.pdf'
import MenuIcon from '@mui/icons-material/Menu';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {navbar: `100vw`, menu: 0, close_nav: false, background: `none`, duration: `0.5s`}
  }
  
  render() {
    window.addEventListener('scroll', ()=> {
      this.setState({close_nav: false});
      if (window.pageYOffset === 0) {
        this.setState({navbar: `100vw`, menu: 0, background: `transparent`, duration: `1s`});
      }
      else {
        this.setState({navbar: `0px`, menu: 1, background:'var(--background-color', duration: `0.5s`});
      }
    })

    return (
      <div className="App">
        <div className="EmailLine"></div>
        <a href='https://github.com/Chrisytz' target='_blank' rel="noreferrer"> <GitHubIcon className="Github" style={{fontSize: `large`}}/> </a>
        <a href='https://www.linkedin.com/in/christinaytzhang/'  target='_blank' rel="noreferrer"> <LinkedInIcon className="Linkedin" style={{fontSize: `large`}}/> </a>
        <a className="Email" href='mailto:c734zhan@uwaterloo.ca'>c734zhan@uwaterloo.ca</a>
  
        <div className="Top">
          <MenuIcon type="button" className="Menu" onClick={() => 
          {if (this.state.close_nav) {
            this.setState({navbar: `0px`, menu: 1, close_nav: false});
          }
          else {
            this.setState({navbar: `100vw`, menu: 1, close_nav: true});
          }
          }} style={{opacity: `${this.state.menu}`}} />
          <div className="Navbar" style={{width: `${this.state.navbar}`, backgroundColor: `${this.state.background}`, transitionDuration: `${this.state.duration}`}}>
            <a className="Items" href={resume} target="_blank">Resume</a>
            <a className="Items" href="#Projects">Projects</a>
            <a className="Items" href="#Experience">Experience</a>
            <a className="Items" href="#About">About</a>
          </div> 
        </div>
 
        <Landing />
        <a name="About"></a>
        <About />
        <a name="Experience"></a>
        <Experience />
        <a name="Projects"></a>
        <Projects id="Projects"/>
        <div className='note'> Designed and built by Christina Zhang</div>
      </div>
    );
  }
}

export default App;
