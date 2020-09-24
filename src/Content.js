import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBContainer,MDBCard,MDBCardBody,MDBCardText
}  from "mdbreact";
import './style.css';
import Platform from './Platform';
class Content extends React.Component {
    render() {
      return (
       
        <div>
            <br/>
            <br/>
            <br/>
           

<div>
<MDBContainer>
        <MDBRow>
        <MDBCol lg="12">
           
           <div style={{"margin-left": "15px" ,"margin-top": "10px","color":"red"}}>
             <h1 className="font-weight-bold" >SERVICES</h1></div>
         </MDBCol>
          <MDBCol lg="4">
         
                <MDBCard className="mb-2">
                <p type="button" class="btn warning-color-dark btn-lg btn-block text-white">IT CONSULTANCY</p>
                  <MDBCardBody>
                    
                    <MDBCardText>
                    <ul>
								 <li> <a href className="dropdown-item">Solution Architect and Design</a></li>
                 <li><a href className="dropdown-item">Application Development <br/>and Enhancement</a></li>								
								 <li><a href className="dropdown-item">Maintenance and Support</a></li>								 	
                 <li><a href className="dropdown-item">Application Migration and Upgrade</a></li>
								 <li><a href className="dropdown-item">Integration</a></li>
                 <li><a href className="dropdown-item">Case Management Solution</a></li>
                 <li> <a href className="dropdown-item">Enterprise Document Management <br/>System (EDMS)</a></li>
								 <li><a href className="dropdown-item">Enterprise Content Management (ECM)</a></li>								  
						  </ul>

                    </MDBCardText>
                    <button type="button" class="btn btn-outline-dark">More</button>
                  
                  </MDBCardBody>
                </MDBCard>
              

          </MDBCol>

          <MDBCol lg="4">
         
                <MDBCard className="mb-2">
                <p type="button" class="btn warning-color-dark btn-lg btn-block text-white">MANAGED IT APPLICATIONS SERVICE</p>
                  <MDBCardBody>
                    
                    <MDBCardText>
                    <ul>
								 <li> <a href className="dropdown-item">Complete Managed Application based<br/>
on Opentext Documentum, SharePoint,<br/>
Java/J2EE, Dot NET,Support</a></li>
                 <li><a href className="dropdown-item">Microsoft PowerApps, Microsoft<br/>
Dynamics, Power BI,Operation </a></li>								
								 <li><a href className="dropdown-item">Documentum xCP, D2, EPFM<br/>
Capital Projects,Office 365</a></li>								 	
               
								 <li><a href className="dropdown-item">Optimize Application Environment</a></li>
                 
                 <li> <a href className="dropdown-item">Configuration and Optimizations</a></li>
								 <li><a href className="dropdown-item">Administration, Monitoring<br/>
and Maintenance,SharePoint Online</a></li>
								 								  
						  </ul>
                    </MDBCardText>
                    <button type="button" class="btn btn-outline-dark">More</button>
                  </MDBCardBody>
                </MDBCard>
          </MDBCol>
          <MDBCol lg="4">
         
         <MDBCard className="mb-2">
         <p type="button" class="btn warning-color-dark btn-lg btn-block text-white">OutSourcing</p>
           <MDBCardBody>
             
             <MDBCardText>
             <ul>
								 <li> <a href className="dropdown-item">Solution Architect and Design</a></li>
                 <li><a href className="dropdown-item">Application Development <br/>and Enhancement</a></li>								
								 <li><a href className="dropdown-item">Maintenance and Support</a></li>								 	
                 <li><a href className="dropdown-item">Application Migration and Upgrade</a></li>
								 <li><a href className="dropdown-item">Integration</a></li>
                 <li><a href className="dropdown-item">Case Management Solution</a></li>
                 <li> <a href className="dropdown-item">Enterprise Document Management <br/>System (EDMS)</a></li>
								 <li><a href className="dropdown-item">Enterprise Content Management (ECM)</a></li>
								 								  
						  </ul>
             </MDBCardText>
             <button type="button" class="btn btn-outline-dark">More</button>
           </MDBCardBody>
         </MDBCard>
       

   </MDBCol>
         
        </MDBRow>
      </MDBContainer>
</div>
<br/>

<Platform/>
<br/>
<br/>

            
      </div>
        
      );
    }
  }
  
  export default Content;

