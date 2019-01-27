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
// import mix-it-up
import mixitup from 'mixitup' 
// smoothScroll
import smoothScroll from 'smoothscroll'
// waypoints

import  logo from './images/car.png';
import workIcon from './images/work-icon.png'

// /import testThumbnail from './images/project-thumbails/mai-ajiva.jpg'
class HomePage extends Component{
    componentDidMount(){ 
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
            strings: ['studio^500-republik!^5000'],
            smartBackspace: true,
            typeSpeed: 70,
            backSpeed:20,
            backDelay: 300,
            loop: true,
            startDelay: 0,
        })
        const typedFooter = new Typed('#footer-typed', {
            strings: ['Developed', 'Designed', 'Created'],
            smartBackspace: true,
            typeSpeed: 70,
            backSpeed:20,
            backDelay: 1000,
            loop: true,
            startDelay: 0,
        })
        // initialize AOS
        AOS.init();
        // Custom UI events

        // navbar onscroll change
        var navBar = document.querySelector('.header-nav');
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 20){
                navBar.classList.add('nav-active')
            }else{
                navBar.classList.remove('nav-active')
            }
        })
        

        // add class to nav element on scroll to the referring section
        function navActiveToggler(section){ //determine if an element is in view
            var navLinks = document.querySelectorAll('.nav-link')
            var referringNavName = section.getAttribute('data-navreferrer')
            var referringNav = document.querySelectorAll(`[data-scrollto=${referringNavName}]`)
            navLinks.forEach((navLink)=>{
                if(navLink.getAttribute('data-scrollto') === referringNavName) {
                    navLink.classList.add('active')
                }else{
                    navLink.classList.remove('active')
                }
               
            })
        }
        // 
        var sections = document.querySelectorAll('.scrollSection') 
        // check if an element is in viewport
        var isInViewport = function (elem) {
            var bounding = elem.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
       window.addEventListener('scroll',()=>{ //add active class to corresponding nav if in view
           sections.forEach((section)=>{
               if(isInViewport(section)) navActiveToggler(section)
           })
       })
       // end of this
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
        <AboutSection/>
        <Services/>
        <ContactFooter/>
        </div>
        </>
    )
}
}
// Topnav component
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
                            <a className="nav-link active scroll-link"  data-scrollto ='home' href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scroll-link"  data-scrollto ='work' href="#work">Our Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scroll-link" data-scrollto ='about' href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scroll-link"  data-scrollto ='services' href="#services">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scroll-link" data-scrollto ='contact' href="#contact">Contact</a>
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
// SliderNav component
class SideNav extends Component{
render(){
    return(
        <nav id='menu' >
             <div className='side-nav-logo-cont py-5'> 
             <img src={logo} className='side-nav-logo' />
             </div>
            <ul className="nav side-nav">
                        <li className="nav-item">
                            <a className="nav-link  active" data-scrollto ='home' href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-scrollto ='work' href="#work">Our Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-scrollto ='about'  href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  data-scrollto ='services' href="#services">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-scrollto ='contact' href="#contact">Contact</a>
                        </li>
            </ul>
        </nav>
    )
}
}
// main Landing Carousel Component
class LandingParralax extends Component{
    render(){
        return(
            <>
            <div className='landing-parralax scrollSection' data-navreferrer='home' id='home'> 
               <div className='parralax-content-container' >
                   <p className='intro-top-text'> Video <span className='top-text-divider'>|</span> Graphics <span className='top-text-divider'>|</span> Hub</p>
                    <div className='parralax-content rellax' data-rellax-speed="10">
                            <span className='intro-text-heading'>
                            <span id='typed'></span>
                            </span>
                            <span className='intro-text'>
                              We got you covered.
                            </span>
                            <a className='intro-button' href='#work'>
                            Explore
                            </a>
                    </div>
                    <a className='intro-top-text' href='te1:0803432324'><span className='top-text-divider fas fa-phone'></span> 080-733-443-3</a>
               </div>
             </div>
            </>
        )
    }
}

//Component  For Our Work Section
class WorkSection extends Component{
    state =  {
        projectData: null,
        projectFilters: [],
        componentMounted: false,
        modalUrl:'',
        showModal: false
    }

    componentDidMount(){
// make api call for projects 
        fetch('api/projects',{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
        .then(response => { return response.json();})
        .then(response=>{this.setState({projectData: response, filters: this._setFilters(response)});})
        .catch(err=> {throw new Error(err.message)})

    }
componentDidUpdate(){
    // 
    mixitup('.projects-container')
    console.log(this.state)
}
componentWillUnmount(){
    
}
    // function to select get filters from available api response.category and set to state
_setFilters =  (projects)=>{
    let filters = [];
    projects.forEach(element=>{
        if(filters.indexOf(element.category) === -1){
            filters.push(element.category)
        }
    })
    return filters
    
}
_showModal= (bool,url)=>{
    if(bool){
        this.setState({
            showModal: true,
            modalUrl: `${url}?vq=hd1` 
        })
    }else{
        this.setState({
            showModal: false,
            modalUrl: '' 
        })
    }

}

    render(){
        return(
            <>
            <div className='work-section scrollSection' data-navreferrer='work' id='work'>
                <div className='section-title col-md-8 col-md-offset-2 text-center'
                data-aos="fade-in"
                data-aos-offset="100"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="500"
                data-aos-duration = '1000'
                data-aos-easing="ease-in-out"
                > 
                
                    <div className='title-image-container'>
                    <img src={workIcon} className='section-title-image' alt="work-Icon"/>
                    </div>
                    <span className='section-title-title'>  OUR WORK </span>
                    <p className='section-title-description'> VISUAL MARKETNIG, CONTENT CONSULTING AND BRAND MANAGEMENT</p>
                </div>
                <div className='project-section'>
                    <div className='filter-section'
                     > 
                     <ul className='filter-wrapper'>
                     <li className='filter' data-filter='all'> ALL </li>

                        {/* set filter buttons from state*/}
                         {this.state.filters? this.state.filters.map(filter=>(
                             <FilterButton
                             title= {filter}
                             dataFilter = {`.${filter}`}
                             />
                         )): null}
                         
                     </ul>
                    </div>
                    <div className='projects-container'
                    > 
                        {/* render thumbnails from state*/}
                       {    
                            this.state.projectData ? this.state.projectData.map(project=>(
                                    <ProjectThumbText
                                        name = {project.name}
                                        title = {project.title}
                                        category = {project.category}
                                        key={project._id}
                                        url={project.url}
                                        showModal = {this._showModal}
                                    />
                            
                                ))
                                
                            :  <div className='gif-loader-cont'>
                    <img src={require('./images/loader.gif')} className='gif-loader' alt='gif-loader' />  
                    </div>  
                            }
                        
                    </div>
                </div>
            </div>
            {this.state.showModal?<Modal url={this.state.modalUrl} showModal={this._showModal}/>:null}
            </>
        )
    }
}
// Component for about Section
class AboutSection extends Component{
    render(){
        return(
            <div className='about-parralax scrollSection'  data-navreferrer='about' id='about'>
                <div className='parralax-content-container'>
                        <div className='about-section-header'>
                            <img src={logo} class='section-logo'/>
                            <h3> About Studio-Republik</h3>
                        </div>
                        <div className='about-section-content '>
                            <p id="typed2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et dolo ut labore et dolore magna aliquased do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                        </div>
                        <div className='about-section-footer'>
                        <a href='#services'> See Our Services</a>
                        </div>
                </div>
            </div>

        )
    }
}
// Component for Contat Footer
class ContactFooter extends Component{
 render(){
        return(
            <div className='contact-footer scrollSection' data-navreferrer='contact' id='contact'>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="10 15 690 133">
                <text transform="matrix(0.99 0 0 1 22.6216 112)" class="st0 st1 st2 st3">STUDIO REPUBLIK</text>
                </svg>
                <div className='contact-buttons'>
               <div> <a href='#contact-form' class='contact-form-button'>  Open Contact Form</a> </div>
               <div> <span className='fas fa-phone contact-icon'></span><a href="tel:+(234)9044343453" class='tel-num'> 090-4433-434e</a> </div>
               <div> <span className='fas fa-envelope contact-icon'></span><a href="mail:studiorepublik@yahoo.com" class='tel-num'>studio-republik@yahoo.com</a> </div>
               <div className='social-icons-div'> <span className='fab fa-instagram'></span> <span className='fab fa-twitter'></span> <span className='fab fa-facebook'></span> </div>
                 </div>
                 <footer> <a><span id='footer-typed'></span> by Abrand &copy;{new Date().getFullYear()}</a></footer>
            </div>
            
            
           
        )
    }
}
// Component for Filters
class FilterButton extends Component{

    render(){
        return(
            <li className='filter' data-filter={this.props.dataFilter}> {this.props.title}</li>
        )
    }
}
// Component for project thumbailsWithText
class ProjectThumbText extends Component{
    render(){
        return(
            <a  href='#see' 
            className= {`project-thumb-text mix ${this.props.category}`}
            onClick={()=>{this.props.showModal(true,this.props.url)}}
            >
                                <img src={require(`./images/project-thumbails/${this.props.name}.jpg`)} className='project-thumbnail'/>
                                <div className='project-title'>
                                     <span className='project-title-title'> {this.props.title}</span>
                                     <span className='project-title-category'> {this.props.category}</span>
                                </div>
                            </a>
        )
        }
    }
//Component for PopUP Modal
class Modal extends Component{
    render(){
        return(
                <div class='modal-local' onClick={()=>{this.props.showModal(false)}}>
                      <div class='modal-content-local'>
                      <iframe  className='iframe'src={this.props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                      </iframe>
                      </div>
                </div>
        )
    }
}
// component for our services
class Services extends Component{
render(){
    return(
        <div className='service-cont scrollSection' data-navreferrer='services' id='services'>
            <div className='work-section'>
                <div className='section-title col-md-8 col-md-offset-2 text-center'
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="500"
                data-aos-duration = '1000'
                data-aos-easing="ease-in-out"
                > 
                
                    <div className='title-image-container'>
                    <img src={workIcon} className='section-title-image' alt="work-Icon"/>
                    </div>
                    <span className='section-title-title'>  Our Services </span>
                    <p className='section-title-description'> Bring Your Visual Imprint To New Levels</p>
                </div>
        </div>
        <ServiceComponent
        animation ={'slide-left'}
        />
        <ServiceComponent
        animation ={'slide-right'}
        />
        <ServiceComponent
        animation ={'slide-left'}
        />
        </div>
    )
}
}
// class for individual  services component 
class ServiceComponent extends Component{
    state ={
        showContent: false
    }
    render(){
        return(
    <div className='service-content'
               data-aos={this.props.animation}
                data-aos-offset="0"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="0"
                data-aos-duration = '1000'
                data-aos-easing="ease-in-out"
    >
        <div className='service-content-title' onClick={()=>{this.setState({showContent: !this.state.showContent})}}>
            <h2> Visual Marketing</h2>
            <p> Video Production/Digital Graphics/ Project Placement</p>
        </div>
        <div className='service-content-content' style={this.state.showContent? {height  :'auto'} : {height :0 }}>
        <div className='title-image-container'>
                    <img src={workIcon} className='section-title-image' alt="work-Icon"/>
                    </div>
        
        <div className='section-content'>
                <h4>
                    Visual Marketing
                </h4>
                <p>
                From corporate company commercials to music videos and films, we are a full service video production company. We have a team of creative and experienced individuals that are committed to bringing your brands visual presence to the next level. With our relationships across many television and internet platforms, not only can we can assist with getting your project out to the masses, but national recognition as well. We can also create digital campaigns so your brand is featured on niche websites catering to the people who follow your brand.
                </p>
        </div>
        </div>
    </div>
        )
    }
}
export default HomePage
