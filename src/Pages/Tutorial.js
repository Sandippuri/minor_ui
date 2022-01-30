import React from 'react';
import img1 from '../images/U1.png'
import img2 from '../images/U2.png'
import img3 from '../images/U3.png'
import img4 from '../images/U4.png'

const Tutorial = () => {
  const imageStyle={
    height:"25vh"

  }
  // const rowstyle={
  //   height:"25vh",
  //   width:"16vw",
  //   display:"flex",
  //   flexDirection:"row",
  //   justifyContent:"space-between"

  // }
    return (
    <>
  <div className="container my-5 ">
    <h1 className='text-center mb-5'>How to use?</h1>
    <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="col-10 mx-auto">
                        <div className="row px-3">
                            <div className="col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                                <h2>Title 1</h2>
                                <h4 className="my-3">
                                    We are the team of talented developer on Front-End & Graphics Design
                                </h4>
                                   
                              
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 img">
                                <img src={img1} className=" img-fluid" alt="home" style={imageStyle} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
    <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="col-10 mx-auto">
                        <div className="row px-3">
                            <div className="col-lg-6 order-1 order-lg-1 img">
                                <img src={img2} className=" img-fluid" alt="home" style={imageStyle} />
                            </div>
                            <div className="col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-2 d-flex flex-column">
                                <h2>Title 2</h2>
                                <h4 className="my-3">
                                    We are the team of talented developer on Front-End & Graphics Design
                                </h4>
                                   
                              
                            </div>
                        </div>
                    </div>

                </div>
            </section>
    <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="col-10 mx-auto">
                        <div className="row px-3">
                            <div className="col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                                <h2>Title 3</h2>
                                <h4 className="my-3">
                                    We are the team of talented developer on Front-End & Graphics Design
                                </h4>
                                   
                              
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 img">
                                <img src={img3} className=" img-fluid" alt="home" style={imageStyle} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
    <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="col-10 mx-auto">
                        <div className="row px-3">
                            <div className="col-lg-6 order-1 order-lg-1 img">
                                <img src={img4} className=" img-fluid" alt="home" style={imageStyle} />
                            </div>
                            <div className="col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-2 d-flex flex-column">
                                <h2>Title 4</h2>
                                <h4 className="my-3">
                                    We are the team of talented developer on Front-End & Graphics Design
                                </h4>
                                   
                              
                            </div>
                        </div>
                    </div>

                </div>
            </section>

  </div>

    </>);
};

export default Tutorial;
