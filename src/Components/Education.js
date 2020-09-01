import React, { Component } from 'react';
import './components.css';

class Education extends React.Component {
    
            state = {  }
            render() { 
                return ( 
                    <section className= "educationSection" id='education'>
                        <h1>-Education-</h1>
                        <div className = "itemList">
                            {schoolList()}
                        </div>
                    </section>
                );
            }
}
function schoolList(){
    const schools = [
        {
            id: 1,
            name: 'University of California, Santa Barbara',
            degree: 'Bachelor of Science, Computer Science',
            graduationYear: 'Expected Graduation in June 2021',
            pictureURL: require('./images/storke.jpg')
        },
        {
            id: 2,
            name: 'San Mateo High School',
            degree: null,
            graduationYear: 'Class of 2017',
            pictureURL: require('./images/smhs.jpeg')
        }
    ]

    const schoolList = schools.map(school => (
        <div className = "itemPair">
                <div className = "imgBlock">
                    <img src={school.pictureURL}/>
                </div>
            <div className = "itemBlock">
                <h2>{school.name}</h2>
                <span>{school.degree}</span>
                <span>{school.graduationYear}</span>
            </div>
        </div>

        )
    )

    return <div>{schoolList}</div>

}

export default Education; 