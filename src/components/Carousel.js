import React from 'react';
import img1 from '../images/bg1.png';
import img2 from '../images/bg2.png';
import img3 from '../images/bg3.png';
import img4 from '../images/bg4.png';
import img5 from '../images/bg5.png';
// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBCarouselElement,
// } from 'mdb-react-ui-kit';

export default function Carousel() {

  return (
    // <div className="fluid-container" style={{height:"50vh"}}>
    // <MDBCarousel showIndicators showControls fade interval={3000}>
    //   <MDBCarouselInner >
    //     <MDBCarouselItem className='active' >
    //       <MDBCarouselElement src={img1} alt='...' style={imgStyle}/>
    //     </MDBCarouselItem>
    //     <MDBCarouselItem>
    //       <MDBCarouselElement src={img1} alt='...' style={imgStyle}/>
    //     </MDBCarouselItem>
    //     <MDBCarouselItem>
    //       <MDBCarouselElement src={img1} alt='...' style={imgStyle}/>
    //     </MDBCarouselItem>
    //   </MDBCarouselInner>
    // </MDBCarousel>

    // </div>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={img1} class=" w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={img2} class=" w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={img3} class=" w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={img4} class=" w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={img5} class=" w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  );
}