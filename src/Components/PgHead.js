import React, { Component } from 'react';
import Typical from 'react-typical';
import Contacts from "./Contacts";
import './pgheader.css';
import './components.css';

class PgHead extends React.Component {
    
    state = {  }
    render() { 
        return ( 
            <section className= "headerSection" id='head'>
                <div className="typical"> 
                    <Typical
                    steps = {['Hi, I\'m Austin']}
                    />
                </div>
                <div className= "topBar">
                    <h1>AW</h1>
                    <div className="contactSectionInHead">
                        {contactsList()}
                    </div>
                </div>
                <div className='imgContainer'>
                    <img src={require('./images/frontcover.jpg')}/>

                </div>

            </section>
        );
    }
}

function contactsList(){
    const contacts = [
        {
            name:"LinkedIn",
            link:"https://www.linkedin.com/in/austin-wong-41534a145",
            pictureURL: require('./images/linkedin.png')
        },
        {
            name:"GitHub",
            link:"https://github.com/austinwong3",
            pictureURL: require('./images/gitLogo.svg')
        },
        {
            
            name:"Email",
            link:"mailto: austinw3000@gmail.com",
            pictureURL: require('./images/mail.png')
        }
    ]

    const contactsList = contacts.map(contact => (
            determineRender(contact)
        )
    )

    return <div className= "contactRowInHead">{contactsList}</div>

}


function determineRender(contact)
{
    
        /*if(contact.name === "Email" )
        {
           return   <div classname = "emailContainer">
                        <button className="emailButton">
                            <img src={contact.pictureURL} className = "emailPic" onClick={(contact) => {navigator.clipboard.writeText("austinw3000@gmail.com")}}/>
                        </button>
                    </div>;
        }
        else{*/
            return  <div className = "contactContainerInHead">
                        <a target="_blank" href={contact.link}>
                             <img src={contact.pictureURL} className = "contactLogoInHead"/>
                        </a>
                    </div>;
        //}
    
}


export default PgHead; 