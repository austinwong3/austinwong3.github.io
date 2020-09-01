import React, { Component } from 'react';
import {Link} from 'react-scroll'
import './Navbar.css';
import Slide from 'react-reveal';

class Navbar extends React.Component {
    
    state = {  }
    render() { 
        return ( 
            
            <div className='navSection'>
                
           <section className='navContainer'>
           <Slide right>
               <div className = 'navbar'>
               <Link
                    className='button'
                    activeClass="active"
                    to="head"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Home</Link>
                <Link
                    className='button'
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Education</Link>
                <Link
                    className='button'
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Work</Link>
                <Link
                    className='button'
                    activeClass="active"
                    to="leadership"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Leadership</Link>
                <Link
                    className='button'
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Resume</Link>
                </div>
                
                </Slide>
           </section>
           
           </div>
           
        );
    }
}

export default Navbar; 