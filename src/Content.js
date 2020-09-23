import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBContainer  
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
           
           
          <div style={{"margin-left": "15px" ,"margin-top": "10px"}}>
            <h6 className="text-white font-weight-bold warning-color-dark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IT CONSULTANCY</h6></div>
      <div style={{"margin-left": "15px" ,"margin-top": "10px"}}>
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
        </div>
          </MDBCol>
          <MDBCol lg="4">
           
          <div style={{"margin-left": "15px" ,"margin-top": "10px","color":"warning-color-dark"}}>
            <h6 className="text-white warning-color-dark font-weight-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MANAGED IT APPLICATIONS SERVICE</h6></div>
      <div style={{"margin-left": "15px" ,"margin-top": "10px"}}>
      <ul>
								 <li> <a href className="dropdown-item">Complete Managed Application based<br/>
on Opentext Documentum, SharePoint,<br/>
Java/J2EE, Dot NET</a></li>
                 <li><a href className="dropdown-item">Microsoft PowerApps, Microsoft<br/>
Dynamics, Power BI</a></li>								
								 <li><a href className="dropdown-item">Documentum xCP, D2, EPFM<br/>
Capital Projects</a></li>								 	
                 <li><a href className="dropdown-item">SharePoint Online, Office 365</a></li>
								 <li><a href className="dropdown-item">Optimize Application Environment</a></li>
                 <li><a href className="dropdown-item">Operation and Support</a></li>
                 <li> <a href className="dropdown-item">Configuration and Optimizations</a></li>
								 <li><a href className="dropdown-item">Administration, Monitoring<br/>
and Maintenance</a></li>
								 								  
						  </ul>
        </div>
         </MDBCol>
          <MDBCol lg="4">
           
          <div style={{"margin-left": "15px" ,"margin-top": "10px"}}>
            <h6 className="text-white font-weight-bold warning-color-dark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OutSourcing</h6></div>
      <div style={{"margin-left": "15px" ,"margin-top": "10px"}}>
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
        </div>
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

