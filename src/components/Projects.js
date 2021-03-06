import React from 'react'
import "./Projects.css"
import githubImg from "../images/github.svg"
import LinkbotImg2 from "../images/LinkbotImg2.jpg"
import CalendarImg from "../images/CalendarImg.png"
import BillSplitLogo from "../images/BillSplitLogo.png"
import BillSplitExample from "../images/BillSplitExample.jpg"
import DigitImg from "../images/DigitImg.png"
import NscImg from "../images/nsc_img.jpg"
import bobaImg from "../images/findmyboba.jpg"
import WebsiteImg from "../images/WebsiteIcon.png"
import "aos/dist/aos.css"

class Projects extends React.Component {
    render() {
        return <div id='projects' className='projects'>
            <div>
                <h1 data-aos="flip-up" data-aos-duration="900">PROJECTS</h1>
                <hr className='projects-hr' 
                    data-aos="flip-left" 
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500" 
                    align="left"/>
            </div>
            
            <div className='content'>
                <a target='_blank' href='https://github.com/jonestrada7/Linkbot-Custom-Modules'
                    rel='noopener noreferrer' data-aos='fade-right' data-aos-duration='750' className='proj-content'>
                        
                    <div className='project-base'>
                        <div className='image-box'>
                            <h2>Linkbot Custom Modules</h2>
                            <p className='proj-description'>Created a software library in <b>Ch (derivation of C++ and C)</b> for a high school robotics class/club. Includes a library of modules that allow Linkbots (modular robots) to drive in customizable, accurate and precise ellipses. Other multi-functional robot APIs are also included as part of the experimenting process in order to allow multiple robots connected together to function as one.</p>
                            <img src={LinkbotImg2} alt="" className='proj-img linkbot'></img>
                        </div>
                    </div>
                    
                    <div className='overlay'>
                        <div className='github-overlay'>
                            <p className='github-desc'>Click to see the code!</p> 
                            <img src={githubImg} alt='Octocat' className='gitimg'></img>
                        </div>
                    </div>
                    
                </a>
                
                <a target='_blank' href='https://www.ucicirclek.com/calendar/'
                    rel='noopener noreferrer' data-aos='fade-up' data-aos-duration='750' className='proj-content'>
                        
                    <div className='project-base'>
                        <div className='image-box'>
                            <h2>UCI Circle K Interactive Calendar</h2>
                            <p className='proj-description'>Improved on and designed a visual calendar for UCI's Circle K club as part of 
                                the Technology Internship Program. Used <b>PHP and SQL queries via jQuery/Ajax</b> to retrieve event 
                                information from a <b>MySQL</b> database and created tooltip popups next to the mouse upon hovering over events. </p>
                            <img src={CalendarImg} alt="" className='proj-img UCICKICalendar'></img>
                        </div>
                    </div>
                    
                    <div className='overlay'>
                        <div className='github-overlay'>
                            <p className='github-desc'>Click to view the finished product!</p> 
                            <img src={WebsiteImg} alt='Octocat' className='gitimg'></img>
                        </div>
                    </div>
                    
                </a>
                
                <a target='_blank' href='https://github.com/chenaaron3/BillSplit'
                    rel='noopener noreferrer' data-aos='fade-left' data-aos-duration='750' className='proj-content'>
                        
                    <div className='project-base'>
                        <div className='image-box'>
                            <h2>BillSplit</h2>
                            <p className='proj-description'>Collaborated and helped design a mobile Android app for HackSC that splits a large party’s bill by scanning a receipt. Used <b>Taggun Optical Character Recognition</b> to recognize and read prices from receipt, <b>Twilio</b> to send automated text messages to send bill information, and <b>Paypal’s API</b> to allow bill recipients to pay securely. </p>
                            <img src={BillSplitLogo} alt="" className='proj-img billsplitlogo'></img>
                            <img src={BillSplitExample} alt="" className='proj-img billsplitexample'></img>
                        </div> 
                    </div>
                    
                    <div className='overlay'>
                        <div className='github-overlay'>
                            <p className='github-desc'>Click to see the code!</p> 
                            <img src={githubImg} alt='Octocat' className='gitimg'></img>
                        </div>
                    </div>
                    
                </a>
            </div>
            
            
            <div className='content'>
                <a target='_blank' href='https://github.com/jonestrada7/Digit_Recognition'
                    rel='noopener noreferrer' data-aos='fade-right' data-aos-duration='750' className='proj-content'>
                        
                    <div className='project-base'>
                        <div className='image-box'>
                            <h2>Digit Classification</h2>
                            <p className='proj-description'>Used <b>Tensorflow</b> and <b>Keras</b> to construct a <b>Convolutional Neural Network</b> trained on MNIST data to recognize, classify and distinguish the ten digits. Used <b>Pandas</b> to preprocess and prepare images from CSV files. Reached <b>98% accuracy</b> on validation set.</p>
                            <img src={DigitImg} alt="" className='proj-img digitimg'></img>
                        </div> 
                    </div>
                    
                    <div className='overlay'>
                        <div className='github-overlay'>
                            <p className='github-desc'>Click to see the code!</p> 
                            <img src={githubImg} alt='Octocat' className='gitimg'></img>
                        </div>
                    </div>
                </a>
                
                <a target='_blank' href='https://github.com/jonestrada7/Natural-Scenery-Classification'
                    rel='noopener noreferrer' data-aos='fade-up' data-aos-duration='750' className='proj-content'>
                        
                    <div className='project-base'>
                        <div className='image-box'>
                            <h2 id='nsc-h'>Natural Scenery Classification</h2>
                            <p className='proj-description'><b>Convolutional Neural Network</b> trained on Natural Scenery data provided by Intel to recognize, classify and distinguish buildings, forests, glaciers, mountains, the sea, and streets. Used <b>OpenCV</b> and <b>NumPy</b> to preprocess and prepare .jpg images. Reached <b>83%</b> accuracy on validation set.</p>
                            <img src={NscImg} alt="" className='proj-img nsc-img'></img>
                        </div> 
                    </div>
                    
                    <div className='overlay'>
                        <div className='github-overlay'>
                            <p className='github-desc'>Click to see the code!</p> 
                            <img src={githubImg} alt='Octocat' className='gitimg'></img>
                        </div>
                    </div>
                </a>
                
                <a target='_blank' href='https://github.com/jonestrada7/find-my-boba'
                    rel='noopener noreferrer' data-aos='fade-left' data-aos-duration='750' className='proj-content'>
                        
                    <div className='project-base'>
                        <div className='image-box'>
                            <h2 id='nsc-h'>FindMyBoba</h2>
                            <p className='proj-description'>A simple <b>web-app</b> that will determine a user's current location and display a random boba place within a 10-mile radius. Built using <b>Javascript, HTML, and CSS</b> in <b>Node.js</b> with the <b>Express</b> framework for back-end and <b>React.js</b> for front-end. Utilized the <b>Yelp Fusion API</b> to generate results for reputable boba places.</p>
                            <img src={bobaImg} alt="" className='proj-img boba-img'></img>
                        </div> 
                    </div>
                    
                    <div className='overlay'>
                        <div className='github-overlay'>
                            <p className='github-desc'>Click to see the code!</p> 
                            <img src={githubImg} alt='Octocat' className='gitimg'></img>
                        </div>
                    </div>
                </a>
                
            </div>
        </div>
    }
}

export default Projects;