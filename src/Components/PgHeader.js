import React, { Component } from 'react';
import './components.css';
import './pgheader.css';

class WorkExperience extends React.Component {
    
    state = {  }
    render() { 
        return ( 
            <section className= "headerSection" id= 'header'>
                <h1>AW</h1>
                <button>Home</button>
                <button>Resume</button>
                <button>Connect</button>
                <img src={require('frontcover.jpg')}/>
            </section>
        );
    }
}
