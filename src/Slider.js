import React from "react";
import servicegif  from './images/gifsys.gif';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import './style.css';
const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={1}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
  
            <img
              className="d-block w-100"
              src={servicegif}
              alt="First slide" style={{"width" : "100%"}}
            />
           </MDBView>
         </MDBCarouselItem>
       </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;