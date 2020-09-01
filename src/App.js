import React from 'react';
import logo from './logo.svg';
import './App.css';
import Education from "./Components/Education";
import WorkExperience from "./Components/WorkExperience";
import LeadershipExperience from"./Components/LeadershipExperience";
import Contacts from "./Components/Contacts";
import Resume from "./Components/Resume";
import Navbar from "./Components/navbar"
import PgHead from "./Components/PgHead";
import Fade from 'react-reveal';



function App() {
  return (
    <header>
      <div className="App">
        <Navbar/>
        <Fade>
          <PgHead/>
        </Fade>
        <Fade>
          <Education/>
        </Fade>
        <Fade>
          <WorkExperience/>     
        </Fade>
        <Fade>
          <LeadershipExperience/>
        </Fade>
        <Fade>
          <Resume/>
        </Fade>
        <Fade>
          <Contacts/>
        </Fade>

      </div>
      </header>
  );

}

export default App;
