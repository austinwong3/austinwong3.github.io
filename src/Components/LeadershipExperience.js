import React, { Component } from 'react';
import './components.css';

class LeadershipExperience extends React.Component {
    
    state = {  }
    render() { 
        return ( 
            <section className= "leadershipSection" id='leadership'>
                <h1>-Leadership Experience-</h1>
                <div className = "itemList">
                    {leadershipList()}
                </div>
            </section>
        );
    }
}

function leadershipList(){
    const roles = [
        {
            id: 2,
            organization: 'Coders SB',
            position: 'Treasurer',
            activeYear: 'June 2018 - Present',
            separater: '-',
            position2: 'Freshman Representative',
            activeYear2: 'October 2017 - June 2018',
            pictureURL: require('./images/coderssb.png')
        },
        {
            id: 1,
            organization: 'UCSB Sigma Epsilon Chapter of Theta Tau',
            position: 'Regent',
            activeYear: 'June 2019 - June 2020',
            separater: '-',
            position2: 'Recruitment Chair',
            activeYear2: 'June 2018 - October 2018',
            pictureURL: require('./images/thetatau.png')
        },
        {
            id: 3,
            organization: 'Developer Student Club',
            position: 'DSC Lead',
            activeYear: 'August 2019 - June 2020',
            pictureURL: require('./images/DSCBracketsSquare.png')
        },
        {
            id: 4,
            organization: 'UCSB Robotics',
            position: 'Social Media Chair',
            activeYear: 'October 2017 - June 2019',
            pictureURL: require('./images/robotics.png')
        }
    ]

    const leadershipList = roles.map(role => (
        <div className = "itemPair">
            <div className = "imgBlock">
                    <img src={role.pictureURL}/>

            </div>
            <div className = "itemBlock">
                <h2>{role.organization}</h2>
                <span>{role.position}</span>
                <span>{role.activeYear}</span>
                <span>{role.separater}</span>
                <span>{role.position2}</span>
                <span>{role.activeYear2}</span>
            </div>
        </div>

        )
    )

    return <div>{leadershipList}</div>

}

export default LeadershipExperience; 
