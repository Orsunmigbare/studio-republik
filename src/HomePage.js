import React, { Component } from 'react';
import './home.css'
// import Javascript libraries
// botStrap
import  'bootstrap/dist/css/bootstrap.css';
// Slideout
import Slideout from 'slideout/dist/slideout'
//rellax
import Rellax from 'rellax' ;
//typed
import Typed from 'typed.js' ;
//import images
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import  logo from './images/car.png';
import workIcon from './images/work-icon.png'

class HomePage extends Component{
    componentDidMount(){
        console.log(document.getElementById('panel'));
        // condigure slideout
        const slideout = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menu'),
            'padding': 256,
            'tolerance': 70
          });
        
          document.getElementById('nav-toggle').addEventListener('click', function() {
            slideout.toggle();
          });
        //   configure rellax
        const rellax =new Rellax('.rellax')
        // configure typed
        const typed = new Typed('#typed', {
            strings: ['creAtiVity?', 'studio^500-republik!^5000','sAtisfAction?','time-keeping?', 'consistency?','creatiVity?'],
            smartBackspace: true,
            typeSpeed: 50,
            backDelay: 300,
            loop: true,
            startDelay: 0,
        })
        // initialize AOS
        AOS.init();
    }
render(){
    return(
        // render homepage
        <>
        <SideNav/>
        <div id='panel'>
        <TopNav/>
        <LandingParralax/>
        <WorkSection/>
        </div>
        </>
    )
}
}
// nav component
class TopNav extends Component{
    render(){
        return(
            <>
            <nav  className="navbar fixed-top navbar-expand-lg navbar-light  header-nav">
                  <div className='logo-nav-container'>
                   <div className='header-logo-with-text'>
                    <img src={logo} className='header-logo' />
                    <span className='header-logo-text'> STUDIO-REPUBLIK</span>
                   </div>
                   

                   <div className='nav-container'>
                   <ul className="nav header-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About/Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                   </div>
                   </div>
            </nav>    
            <div id='nav-toggle' href='#'> </div>  
            
            </>
            )
    }
}
class SideNav extends Component{
render(){
    return(
        <nav id='menu' >
             <div className='side-nav-logo-cont py-5'> 
             <img src={logo} className='side-nav-logo' />
             </div>
            <ul className="nav side-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About/Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
            </ul>
        </nav>
    )
}
}

class LandingParralax extends Component{
    render(){
        return(
            <>
            <div id='landing-parralax' > 
               <div className='parralax-content-container' >
                   <p class='intro-top-text'> VISUAL MARKETING <span className='top-text-divider'>|</span> BRAND MARKETING <span className='top-text-divider'>|</span> CONSULTING</p>
                    <div className='parralax-content rellax' data-rellax-speed="5">
                            <span className='intro-text-heading'>
                            <span id='typed'>Creativity?</span>
                            </span>
                            <span className='intro-text'>
                              We got you covered.
                            </span>
                            <span className='intro-button'>
                            Explore
                            </span>
                    </div>
                    <p className='intro-top-text'><span className='top-text-divider'>&copy;</span> 2018</p>
               </div>
             </div>
            </>
        )
    }
}
class WorkSection extends Component{
    render(){
        return(
            <div className='work-section'>
                <div className='section-title col-md-8 col-md-offset-2 text-center'
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="500"
                > 
                
                    <div className='title-image-container'>
                    <img src={workIcon} className='section-title-image' alt/>
                    </div>
                    <span className='section-title-title'>  OUR WORK </span>
                    <p className='section-title-description'> VISUAL MARKETNIG, CONTENT CONSULTING AND BRAND MANAGEMENT</p>
                </div>
            </div>
        )
    }
}
export default HomePage