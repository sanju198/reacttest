import React from "react";
import pptimg1 from './images/pptimg1.jpg';
import pptimg5 from './images/pptimg5.png';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
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
            <img
              className="d-block w-100"
              src={pptimg1}
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
         
          </MDBView>
          
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;