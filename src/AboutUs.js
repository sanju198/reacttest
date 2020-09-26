import React from 'react';
import {
 MDBRow,MDBCol,MDBContainer
  } from "mdbreact";
class AboutUs extends React.Component {
  
 
  render() {
    
    return (
      <div>
        <MDBContainer>
        <MDBRow>
        <MDBCol lg="12">
           
           <div style={{"margin-left": "15px" ,"margin-top": "10px","color":"red"}}>
             <h1 className="font-weight-bold" >About Us</h1>
             </div>
         </MDBCol>
         <p className="text-muted"><small>SysDataLytics is IT Consultancy and Service Company advising the organization that how to best use Information Technology in achieving their business activity.<br/><br/>
				  				  
                    Reduce your IT expenses and with our managed IT application Service so you can focus on your business not your applications. We helps you to manage existing business critical applications, whilst you pay undivided attention to your core competencies. We provides maintenance and support services of applications developed in numerous technology environments and frameworks. We Global Sourcing Model lends itself to provide critical support onsite.<br/><br/>
                    
                    Are you using the right technology and solution for your business? As data says, businesses spend more than 30-40% extra cost just by using the wrong technology and solutions. Through our consultancy services we help you make an informed decision so that you get what you want in less time and less cost. Because you deserve nothing but the best. <br/><br/>
                    
                    
                    If these are some common questions that delay your project, then we are here to guide you. We offer IT consultancy services in the vast landscape and help brands with strategizing, designing, developing and implementing. We leverage the latest technologies and industry trends and thus offer innovative solutions for your business that makes its stand apart. We are here to make a powerful impact on your business.</small>T</p>
          <MDBCol lg="4">
        
          
          </MDBCol>
          
       
       
        </MDBRow>
      </MDBContainer>
        
              
       
      </div>
    )
  }
}
  
  export default AboutUs;