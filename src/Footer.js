import React, { Component } from "react";
import {MDBContainer, MDBFooter,MDBRow,MDBCol,MDBLink,MDBTabPane,MDBTabContent } from "mdbreact";
import { BrowserRouter as Router} from 'react-router-dom';
import AboutUs from './AboutUs';

class FooterPage extends Component {
  state = {
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
  
  
  
  render() {
    const { activeItemPills } = this.state;
    return (
     
    <Router>
    <MDBFooter color="black" className="font-small pt-4 mt-4">
     <MDBContainer>
        <MDBRow>
        <MDBCol lg="4">
        <div>
        <h6 class="text-uppercase mb-4 font-weight-bold">Services</h6>
        <p>
        <MDBLink to='#'  className=" md-2 text-white font-weight-bold " active={activeItemPills === 'IT Consultancy'} onClick={this.togglePills('IT Consultancy')} link>
                  <span>IT Consultancy</span>
                    </MDBLink>
        </p>
        <p>
          <a href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!">Shipping Rates</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p>
      </div>
    </MDBCol>
    <MDBCol lg="4">
        <div>
        <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
          <a href="#!">Your Account</a>
        </p>
        <p>
          <a href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!">Shipping Rates</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p>
      </div>
    </MDBCol>
    <MDBCol lg="4">
        <div>
        <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
        <p>
          <a href="#!">Your Account</a>
        </p>
        <p>
          <a href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!">Shipping Rates</a>
        </p>
        <p>
          <a href="#!">Help</a>
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


    <MDBTabContent activeItem={activeItemPills}>
                  
                  <MDBTabPane tabId='IT Consultancy'>
                    <br/>
                  <MDBContainer>
        <MDBRow>
        <MDBCol lg="12">

          
           
           <div style={{"margin-left": "15px" ,"margin-top": "10px","color":"red"}}>
             <h1 className="font-weight-bold" >IT CONSULTANCY/PROFESSIONAL SERVICE</h1>
             </div>
         </MDBCol>
         We are maintaining the professional skilled Resource pool for ECM technology and providing trustable service starting from but not limited ECM platform like SharePoint and Opentext Documentum. Also, we are providing business support to the customer starting from Architect design, development, enhancement and support not limited to ECM Technology.
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
    </Router>
  ); 
}
}
export default FooterPage;