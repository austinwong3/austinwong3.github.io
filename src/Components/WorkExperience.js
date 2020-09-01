import React, { Component } from 'react';
import './components.css';

class WorkExperience extends React.Component {
    
    state = {  }
    render() { 
        return ( 
            <section className= "workExperienceSection" id='work'>
                <h1>-Relevant Work Experience-</h1>
                <div className = "itemList">
                    {workList()}
                </div>
            </section>
        );
    }
}

function workList(){
    const jobs = [
        {
            id: 1,
            company: 'UCSB Health & Wellness Department',
            role: 'Web Content Developer Intern',
            activeYear: 'June 2020 - Present',
            pictureURL: require('./images/H&Wlogo.png')
        },
        {
            id: 2,
            company: 'Appfolio Inc.',
            role: 'Quality Assurance Engineering Intern',
            activeYear: 'June 2019 - September 2019 | April 2020 - Present',
            pictureURL: require('./images/appfoliologo.png')
        }
    ]

    const jobList = jobs.map(job => (
        <div className = "itemPair">
            <div className = "imgBlock">
                    <img src={job.pictureURL}/>

            </div>
            <div className = "itemBlock">
                <h2>{job.company}</h2>
                <span>{job.role}</span>
                <span>{job.activeYear}</span>
            </div>
        </div>

        )
    )

    return <div>{jobList}</div>

}

export default WorkExperience; 
