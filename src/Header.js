import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown,MDBCloseIcon, MDBDropdownToggle,MDBLink,MDBTabContent,MDBTabPane,MDBRow,MDBCol,MDBContainer,MDBFooter
} from "mdbreact";
import { BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.png';
import './style.css';

//import App from './App.js';
import AboutUs from './AboutUs';
import Slider from './Slider.js';
import Content from "./Content";

class NavbarPage extends Component {
state = {
  isOpen: false,
  isActive:true,
  activeItemPills: '1'
};

togglePills = tab => () => {
  const { activePills } = this.state;
  if (activePills !== tab) {
    this.setState({
      activeItemPills: tab
    });
  }
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

handleHide = () =>{
   this.setState({
       isActive: false
   })
}
render() {
  const { activeItemPills } = this.state;
  return (
   
    <Router>
       <div>
      
      {
           this.state.isActive ? 
           <table className="table table-borderless " bgcolor="white" >
           <tbody>
             <tr>
<td className="verticalDivider fontStyle">Need help while you shop?</td>
<td><span className=" md-2 text-dark font-weight-bold ">Virtual shop with an educator</span></td>

<td onClick={this.handleHide} pointer><span className=" md-2 text-dark font-weight-bold "><MDBCloseIcon /></span></td>
</tr>
</tbody>
</table>
           : null 
           
           
           }
            
    </div>
      <MDBNavbar className="lelubgcolor" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text"><img src={logo} alt="logo" style={{width: 200, height: 40}} /></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem>
              
                  <MDBLink to='#'  className=" md-2 text-dark font-weight-bold " active={activeItemPills === '1'} onClick={this.togglePills('1')} link>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</span>
                    </MDBLink>
            </MDBNavItem>
          <MDBNavItem>
              <MDBDropdown>

              <div nav  className=" md-2 text-dark font-weight-bold nav-link dropdown-toggle ">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;Services</span>
                </div>
                <div className="dropdown-menu">
                  <div href="#!">
                  <div className="d-flex bd-highlight">
  <div>
  <MDBLink to='#'  className=" md-2 text-dark font-weight-bold " active={activeItemPills === 'IT Consultancy'} onClick={this.togglePills('IT Consultancy')} link>
                  <span>IT Consultancy</span>
                    </MDBLink>
 
                    <MDBLink to='#'  className=" md-2 text-dark font-weight-bold " active={activeItemPills === 'Manage Application Services'} onClick={this.togglePills('Manage Application Services')} link>
                  <span>Manage Application Services</span>
                    </MDBLink>
                    <MDBLink to='#'  className=" md-2 text-dark font-weight-bold " active={activeItemPills === 'outsourcing'} onClick={this.togglePills('outsourcing')} link>
                  <span>Outsourcing</span>
                    </MDBLink>
  </div>
</div>
    </div> 
                </div>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
            
              
              <MDBLink to='#'  className=" md-2 text-dark font-weight-bold aboutus" active={activeItemPills === 'aboutus'} onClick={this.togglePills('aboutus')} link>
              
              <span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#aboutus"  className=" md-2 text-dark font-weight-bold " >AboutUs</a></span>
                </MDBLink>
                
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
              <div nav  className=" md-2 text-dark font-weight-bold nav-link dropdown-toggle ">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;Platform</span>
                </div>
                <div className="dropdown-menu">
                  <div href="#!">
                  <div className="d-flex bd-highlight">
  <div>
  <MDBLink to='#'  className=" md-2 text-dark font-weight-bold " active={activeItemPills === 'IT Consultancy'} onClick={this.togglePills('IT Consultancy')} link>
                  <span>SharePoint</span>
                    </MDBLink>
 
                    <MDBLink to='#'  className=" md-2 text-dark font-weight-bold " active={activeItemPills === 'Manage Application Services'} onClick={this.togglePills('Manage Application Services')} link>
                  <span>Documentum</span>
                    </MDBLink>
                    <MDBLink to='#'  className=" md-2 text-dark font-weight-bold " active={activeItemPills === 'outsourcing'} onClick={this.togglePills('outsourcing')} link>
                  <span>ERP Solution</span>
                    </MDBLink>
                    <MDBLink to='#'  className=" md-2 text-dark font-weight-bold " active={activeItemPills === 'outsourcing'} onClick={this.togglePills('outsourcing')} link>
                  <span>Programming Language</span>
                    </MDBLink>
  </div>
</div>
    </div> 
                </div>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav  className=" md-2 text-dark font-weight-bold">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;ContactUs</span>
                </MDBDropdownToggle>
              </MDBDropdown>
            </MDBNavItem>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light  text-dark font-weight-bold verticalDivider-xl" to="#!">
               Sign In
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBFormInline waves >
                
                <div>
                  <input className="form-control form-control-sm ml-0 my-1" type="search" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>




          <MDBTabContent activeItem={activeItemPills}>
                  <MDBTabPane tabId='1'>
                    <br/>
                  <Slider/>
                  <Content/>
                  </MDBTabPane>
                  <MDBTabPane tabId='IT Consultancy'>
                    <br/>
                  <MDBContainer>
        <MDBRow>
        <MDBCol lg="12">

          
           
           <div style={{"margin-left": "15px" ,"margin-top": "10px","color":"red"}}>
             <h1 className="font-weight-bold" >IT CONSULTANCY/PROFESSIONAL SERVICE</h1>
             </div>
         </MDBCol>
       <p className="dropdown-item">  
       We are maintaining the professional skilled Resource pool for ECM technology and providing trustable  <br></
       br>service starting from but not limited ECM platform like SharePoint and Opentext Documentum. Also, <br></br>
       we are providing business support to the customer starting from Architect design, development, <br></br>enhancement and support not limited to ECM Technology.</p>
          <MDBCol lg="4">
        
          <div style={{"margin-left": "15px" ,"margin-top": "10px","color":"red"}}>
             <h2 className="font-weight-bold" >Future</h2>
             </div>
      <div style={{"margin-left": "15px" ,"margin-top": "10px"}}>
      <ul>
								 <li> <a href className="dropdown-item">Solution architect and Design</a></li>
                 <li><a href className="dropdown-item">Application Development and Enhancement</a>
                 <ul>
										<li><a href className="dropdown-item">Custom Application Development</a></li>
										<li><a href className="dropdown-item">Enterprise Web Application</a></li>
										<li><a href className="dropdown-item">User Experience</a></li>
										<li><a href className="dropdown-item">System Integration</a></li>
										<li><a href className="dropdown-item">Embedded Application</a></li>
										<li><a href className="dropdown-item">Enterprise Web Apps</a></li>
										<li><a href className="dropdown-item">SharePoint Solution</a></li>
										<li><a href className="dropdown-item">Opentext Documentum Solution</a></li>
									</ul>
                 
                 </li>								
								 <li> <a href className="dropdown-item">Maintenance and Support</a></li>
								 	<ul>
										<li><a href className="dropdown-item">Reactive Maintenance:Bug Fixing</a></li>
										<li><a href className="dropdown-item">Adaptive Maintenance:Porting</a></li>
										<li><a href className="dropdown-item">Proactive Maintenance:Scalabilty</a></li>
										<li><a href className="dropdown-item">Preventive Maintenance: Technical Documentation</a></li>
										
									</ul>
								 <li> <a href className="dropdown-item">Application Migration and Upgrade</a></li>
								 <li> <a href className="dropdown-item">Integration</a></li>
								 								  
						  </ul>
        </div>
          </MDBCol>
          
       
       
        </MDBRow>
      </MDBContainer>
                  </MDBTabPane>
                  <br/>
                  <MDBTabPane tabId='Manage Application Services'>
                    <br/>
                  <MDBContainer>
        <MDBRow>

          
        <MDBCol lg="12">
           
           <div style={{"margin-left": "15px" ,"margin-top": "10px","color":"red"}}>
             <h1 className="font-weight-bold" >MANAGED IT APPLICATION SERVICE</h1>
             </div>
         </MDBCol>
         Reduce your IT expenses and with our managed IT application Service so you can focus on your business not your applications. We helps you to manage existing business critical applications, whilst you pay undivided attention to your core competencies. We provides maintenance and support services of applications developed in numerous technology environments and frameworks. We Global Sourcing Model lends itself to provide critical support onsite..
          <MDBCol lg="4">
        
          <div style={{"margin-left": "15px" ,"margin-top": "10px","color":"red"}}>
             <h2 className="font-weight-bold" >APPLICATION MAINTENANCE</h2>
             </div>
      <div style={{"margin-left": "15px" ,"margin-top": "10px"}}>
      <ul>
								 <li> <a href className="dropdown-item">Re-engineer existing application to integrate new generation technologies</a></li>
								 <li> <a href className="dropdown-item">Enhance the Existing module and make with more rich of functionality</a></li>
									
								 <li> <a href className="dropdown-item">We user almost all the technologies to enhance the application based on platform and customer demand</a></li>
								 <li> <a href className="dropdown-item">Fine tune processes to improve performance</a></li>
								 <li> <a href className="dropdown-item">Forecast flaws and take preventive steps to enhance availability</a></li>
								 <li> <a href className="dropdown-item">Corrective measures to resolve bugs.</a></li>
								 								  
						  </ul>
              <div style={{"margin-left": "15px" ,"margin-top": "10px","color":"red"}}>
             <h2 className="font-weight-bold" >APPLICATION MANAGEMENT</h2>
             </div>
              <ul>
								 <li> <a href className="dropdown-item">Application Development and Enhancement</a></li>
								 <li> <a href className="dropdown-item">Critical business modules like SharePoint and Opentext documents</a></li>
									
								 <li> <a href className="dropdown-item">Java and .net application development and enhancement</a></li>
								 <li> <a href className="dropdown-item">Legacy Application and data migration e.g. data migration from file Server to SharePoint</a></li>
								 <li> <a href className="dropdown-item">Keep latest application patch update e.g. SharePoint zero time patching in SharePoint 2016</a></li>
								 
								 								  
						  </ul>
        </div>
          </MDBCol>
          
       
       
        </MDBRow>
      </MDBContainer>
        
                  </MDBTabPane>


                  <MDBTabPane tabId='aboutus'>
                    <br/>
                   
                  <AboutUs/>
                  </MDBTabPane>
                  
                  <MDBTabPane tabId='outsourcing'>
                    <br/>
                  
                  <MDBContainer>
        <MDBRow>
        <MDBCol lg="12">
           
        <div style={{"margin-left": "15px" ,"margin-top": "10px","color":"red"}}>
             <h1 className="font-weight-bold" >Outsourcing</h1></div>
         </MDBCol>
         <p></p>
         
         
            
      <div style={{"margin-left": "15px" ,"margin-top": "10px"}}>
      In an outsourcing scenario, a particular project (e.g. Software development) is dished out to a service provider, who remains responsible for execution and delivery. The service provider is responsible for the successful completion of only the project. The provider manages the end to end execution, and can also hire talent if required. Apart from that, the client doesn’t need to take any added responsibility to complete it. This allows the client to focus on core business activities and delegate specific project(s) to the chosen service provider(s).
          <MDBCol lg="4">
          <ul>
							  <li> <a href className="dropdown-item">Contract Staffing</a></li>
							 <li> <a href className="dropdown-item">Parmanent Recruitment</a></li>
							 <li> <a  href className="dropdown-item">On-Demand Staffing</a></li>
							 <li> <a href className="dropdown-item">Project Team Deployment</a></li>
							 <li> <a href className="dropdown-item">Independent Consultant</a></li>
							 <li> <a href className="dropdown-item">Staff Augumentation</a></li>
								 
													 
						  </ul>

          
          </MDBCol>
          </div>
       
       
        </MDBRow>
      </MDBContainer>
        
                  </MDBTabPane>
                  </MDBTabContent>


                  <MDBFooter color="black" className="font-small pt-4 mt-4">
     <MDBContainer>
        <MDBRow>
        <MDBCol lg="4">
        <div>
        <h6 class="text-uppercase mb-4 font-weight-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services</h6>
        <p>
        <MDBLink to='#'  className=" md-2 text-white font-weight-bold " active={activeItemPills === 'IT Consultancy'} onClick={this.togglePills('IT Consultancy')} link>
                  <span>IT Consultancy</span>
                    </MDBLink>
        </p>
        <p>
        <MDBLink to='#'  className=" md-2 text-white font-weight-bold " active={activeItemPills === 'Manage Application Services'} onClick={this.togglePills('Manage Application Services')} link>
                  <span>Manage Application Services</span>
                    </MDBLink>
                    </p>
                    <p>
                    <MDBLink to='#'  className=" md-2 text-white font-weight-bold " active={activeItemPills === 'outsourcing'} onClick={this.togglePills('outsourcing')} link>
                  <span>Outsourcing</span>
                    </MDBLink>
                    </p>
      </div>
    </MDBCol>
    <MDBCol lg="4">
        <div>
        <h6 class="text-uppercase mb-4 font-weight-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PlatForm</h6>
        <p>
        <MDBLink to='#'  className=" md-2 text-white font-weight-bold " active={activeItemPills === 'IT Consultancy'} onClick={this.togglePills('IT Consultancy')} link>
                  <span>SharePoint</span>
                    </MDBLink></p>
                    <p>
                    <MDBLink to='#'  className=" md-2 text-white font-weight-bold " active={activeItemPills === 'Manage Application Services'} onClick={this.togglePills('Manage Application Services')} link>
                  <span>Documentum</span>
                    </MDBLink></p>
                    <p>
                    <MDBLink to='#'  className=" md-2 text-white font-weight-bold " active={activeItemPills === 'outsourcing'} onClick={this.togglePills('outsourcing')} link>
                  <span>ERP Solution</span>
                    </MDBLink></p>
                    <p>
                    <MDBLink to='#'  className=" md-2 text-white font-weight-bold " active={activeItemPills === 'outsourcing'} onClick={this.togglePills('outsourcing')} link>
                  <span>Programming Language</span>
                    </MDBLink></p>
      </div>
    </MDBCol>
    <MDBCol lg="4">
        <div>
        <h6 class="text-uppercase mb-4 font-weight-bold">AboutUs</h6>
        <p>
        <MDBLink to='#'  className=" md-2 " active={activeItemPills === 'aboutus'} onClick={this.togglePills('aboutus')} link>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#aboutus" className="text-white font-weight-bold ">AboutUs</a></span>
                </MDBLink>
        </p>
        
      </div>
    </MDBCol>
  </MDBRow>
  </MDBContainer>
  
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
         
        </MDBContainer>
      </div>
    </MDBFooter>
                
    </Router>
    
    );

    
  }
}

export default NavbarPage;