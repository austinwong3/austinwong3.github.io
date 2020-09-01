import React, { Component } from 'react';
import './components.css';

class Contacts extends React.Component {
    
            state = {  }
            render() { 
                return ( 
                    <section className= "contactRow" id='contacts'>
                            {contactsList()}  
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
            name:"Email",
            link:"mailto: austinw3000@gmail.com",
            pictureURL: require('./images/gitLogo.svg')
        },
        {
            name:"GitHub",
            link:"https://github.com/austinwong3",
            pictureURL: require('./images/mail.png')
        }
    ]

    const contactsList = contacts.map(contact => (
            determineRender(contact)
        )
    )

    return <div>{contactsList}</div>

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
            return  <div className = "contactContainer">
                        <a target="_blank" href={contact.link}>
                            <img src={contact.pictureURL} className = "contactLogo"/>
                        </a>
                    </div>;
        //}
    
}

function copyToClip(contact) {
    /* Get the text field */
    var copyText = contact.link;
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

export default Contacts; 