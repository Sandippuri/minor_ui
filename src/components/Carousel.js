import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  const imgStyle={height:"50vh",objectFit:"cover"}

  return (
    <div className="fluid-container" style={{height:"50vh"}}>
    <MDBCarousel showIndicators showControls fade interval={3000}>
      <MDBCarouselInner >
        <MDBCarouselItem className='active' >
          <MDBCarouselElement src={img1} alt='...' style={imgStyle}/>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={img2} alt='...' style={imgStyle}/>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={img3} alt='...' style={imgStyle}/>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>

    </div>
  );
}