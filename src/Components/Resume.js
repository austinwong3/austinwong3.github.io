import React, { Component, useState  } from 'react';
import {Document, Page} from 'react-pdf';
import PDF from './PDF.js';
import {PDFtoIMG} from 'react-pdf-to-image';
import file from './images/WongAustinResume2020.pdf';
import './components.css';


class Resume extends React.Component {

            state = {}
                
                render() { 
                    return ( 
                        <section className= "resumeSection" id='resume'>
                        <h1>-Resume-</h1>
                        <div>
                        <div className="overlayContainer">
                        
                            <PDF className = "pdfImg"/>
                            
                            <div className="overlay">
                                <a id={"resume"} target="_blank" href={file}><span className="overlayText">Download</span><span className="overlayText"> Resume</span></a>
                            </div>
                        </div>
                        </div>
                        </section>
                        
                    );
                }
}


export default Resume; 