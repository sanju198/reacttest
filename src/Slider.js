import React from "react";
import gif  from './images/pgif.gif';
import services  from './images/services.gif';
import pltgif  from './images/pltgif.gif';
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
  
            <img
              className="d-block w-100"
              src={services}
              alt="First slide" style={{"width" : "100%"}}
            />
          
          </MDBView>
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={gif}
              alt="Second slide" style={{"width" : "100%"}}
              
            />
         
          </MDBView>
        
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={pltgif}
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