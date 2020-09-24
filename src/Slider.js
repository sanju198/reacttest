import React from "react";
import pptimg1 from './images/pptimg1.jpg';
import pptimg5 from './images/pptimg5.png';
import simg from './images/simg.jpg';
import pptimg6 from './images/pptimg6.png';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import './style.css';
const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
          <div className="carousel-caption">
        <div className="in-left float-left
" ><img
className="d-block w-100"
src={pptimg6}
alt="First slide" 
/></div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div className="animated zoomInRight float-right font-weight-bold"><h2>DIGITILIZATION</h2></div>
      </div>
            <img
              className="d-block w-100"
              src={simg}
              alt="First slide" style={{"width" : "100%"}}
            />
          
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={pptimg5}
              alt="Second slide" style={{"width" : "100%"}}
              
            />
         
          </MDBView>
        
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={pptimg1}
              alt="Third slide" style={{"width" : "100%"}}
              
            />
         <div className="carousel-caption">
        
        <h3 className="animated swing fadeInLeft my-4">Light mask</h3>
        <p>First text</p>
        <div class="in-left">fadeInLeft</div>
      </div>
          </MDBView>
          
        </MDBCarouselItem>
        
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;