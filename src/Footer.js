import React from "react";
import {MDBContainer, MDBFooter,MDBRow,MDBCol } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
     <MDBContainer>
        <MDBRow>
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
  );
}

export default FooterPage;