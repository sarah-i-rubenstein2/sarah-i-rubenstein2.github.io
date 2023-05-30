import './App.css';
import space from './space.png';
import { useRef, State, useState } from "react";

function App() {
  const abtRef = useRef(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [content, setContent] = useState(null);

  const toAbt = () =>{
    abtRef.current.scrollIntoView();
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  }

  const updateSubject = (e) => {
    setSubject(e.target.value);
  }

  const updateContent = (e) => {
    setContent(e.target.value);
  }

  const submitMail = (e) => {
    window.location.href = "mailto:sarah.i.rubenstein@gmail.com?subject="+subject+"&body="+content;
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="navbar">
          <a className="nav" href="#abt">about me</a>
          <a className="nav" href="#sklz">skills</a>
          <a className="nav" href="#proj">projects</a>
          <a className="nav"href="#statz">awards/achievements</a>
          <a className="nav" href="#cm">contact me</a>

      </div>
      <div className="titlePage">
        <div id="words">
          <p id="title">Sarah Rubenstein</p>
          <p id="subtitle">software engineer</p>
          <br></br>
          <button onClick={toAbt}>about me</button>
        </div>
        <img src={space}></img>
      </div>
      <div className="mainPage" ref={abtRef}>
        <div className='content'>
          <h2 id="abt">About Me</h2>
          <p>Hello! I am a computer science student at the University of Wisconsin Madison. 
            I'm interested in full stack web development and machine learning. I'm always looking for 
            new opportunities to learn about code.</p>
          <h2 id="sklz">Skills</h2>
            <div id="skills">
              <a className='skill' href="https://react.dev/" target="_blank">React.js</a>
              <a className='skill' href="https://getbootstrap.com/" target="_blank">Bootstrap</a>
              <a className='skill' href="https://nodejs.org/en" target="_blank">Node.js</a>
              <a className='skill' href="https://www.java.com/en/" target="_blank">Java</a>
              <a className='skill' href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML</a>
              <a className='skill' href="https://en.wikipedia.org/wiki/CSS" target="_blank">CSS</a>
              <a className='skill' href="https://git-scm.com/" target="_blank">Git</a>
              <a className='skill' href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">Javascript</a>
            </div>
          </div>
          <h2 id="proj">Projects</h2>
          <div className='projects'>
            <div className="project">
              <h3>Paper++</h3>
              <p>A tool that converts user submitted, hand written code, to compilable Java files, running them and return the output. Won top 5 MadHacks 2023.</p>
              <a href="https://github.com/Paper-Plus-Plus" target="_blank">Github</a>
            </div>
            <div className="project">
              <h3>AI Wildlife App</h3>
              <p>An app that is able to identify the animal in a picture taken or uploaded by the user. It uses the Microsoft AI for Earth API to identify animals.</p>
              <a href="https://github.com/sarah-i-rubenstein/AI_Wildlife_App" target="_blank">Github</a>
            </div>
            <div className="project">
              <h3>COVIsion</h3>
              <p>A device that can identify how many people are masked/unmasked inside a room, calculate a COVID risk factor, and display this factor on a string of LEDs outside a door. I won the Milwaukee Tool Innovation Challenge with this project.</p>
              <a href="https://www.youtube.com/watch?v=gTYqDFbRPv8" target="_blank">Video</a>
            </div>
          </div>
          <h2 id="statz">Awards/Achievements</h2>
          <div id="awards">
            <div className="award">
              <h3>MadHacks top 5</h3>
              <p>Team in top 5 out of 50+ teams at MadHacks 2023</p>
            </div>
            <div className="award">
              <h3>Milwaukee Tool Innovation Challenge Winner</h3>
              <p>Presented a software project infront of judges. Recieved highest score of 29 groups.</p>
            </div>
            <div className="award">
              <h3>AZ 900</h3>
              <p>Azure fundamentals certification. Shows a foundational knowledge of cloud services</p>
            </div>
            <div className="award">
              <h3>Reinvent-a-thon 2nd Place Winner</h3>
              <p>Competed against 80+ girls to develop a STEM solution to a problem statement.</p>
            </div>
            <div className="award">
              <h3>NCWIT Wisconsin Affiliate Winner</h3>
              <p>Awarded to young women with aspirations in technology.</p>
            </div>
          </div>
          <h2 id="cm">Contact Me</h2>
          <p>email me at <span style={{textDecoration: "underline"}}>sarah.i.rubenstein@gmail.com</span></p>
          <div id="contact">
            <form>
              <p>Your email:</p>
              <input type="text" onChange={updateEmail}></input>
              <p>Subject:</p>
              <input type="text" onChange={updateSubject}></input>
              <p>Content:</p>
              <textarea onChange={updateContent}></textarea>
              <button id="submit" onClick={submitMail}>Submit</button>
            </form>
          </div>
          <br></br>
      </div>
      <div className="end">
        <p>Made by Sarah Rubenstein 2023</p>
        <p>PNG Designed By 阿薩布鲁 from https://pngtree.com/freepng/planet-space-aesthetics-art-character-universe-icon_7471244.html?sol=downref&id=bef</p>
      </div>
    </div>
  );
}

export default App;
