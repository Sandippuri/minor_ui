import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import dragNdrop from '../images/drgndrop.png';
import { useDropzone } from 'react-dropzone';
import Button from '../components/Button';
import axios from "axios";
import Dropdown from "./Dropdown";

const ImageNText = styled.div`

text-align: center;
justify-content: center;

`;
const DragNdropContainer = {
  border: "1px dashed grey",
  padding: "25vh 0",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#d3d3d3"
};

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};


const thumb = {
  display: 'inline-flex',
  marginBottom: 8,
  marginRight: 8,
  justifyContent: "center",
  width: '100%',
  height: '100%',
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: "flex"

};

const img = {
  minWidth: "60vw",
  minheight: "60vh",
  width: "60vw",
  height: "60vh",
  objectFit:"scale-down"
};



const ImageContainer = () => {

  const [images, setImages] = useState([]);
  const [newImages, setnewImages] = useState();
  const [newImageArrived, setnewImageArrived] = useState(false);
  const [imagePreview, setImagePreview] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setImagePreview(true);
      setImages(acceptedFiles.map(image => Object.assign(image, {
        preview: URL.createObjectURL(image)
      })));

    }


  });

  const thumbs = images.map(image => (
    <div style={thumb} key={image.name}>
      <div style={thumbInner}>
        <img
          src={image.preview}
          style={img}
          alt="oldImages"
        />
      </div>
    </div>
  ));

  useEffect(() => {
    images.forEach(image => URL.revokeObjectURL(image.preview));
  }, [images]);

  const handleSubmit = (e) => {
    console.log("object");
    e.preventDefault();
    let form_data = new FormData();
    if (images !== null) {
      console.log(images);
      form_data.append('image', images[0])
    }
    let url = 'http://localhost:8000/api/old_image/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
  };


  const throwError = () => {
    alert("Please select the image first !!!")
  }

  useEffect(()=>{
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/old_image',
    })
      .then((response)=>{
       const data=response.data
        console.log(data);
        setnewImages(data.image);
        setnewImageArrived(true);
      });

  },[images]);

  if (imagePreview) {
    return (
      <>
        <div className="container" style={thumbsContainer}>
          {thumbs}
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",padding:"10px 20px" }}>
          <Dropdown />
          <button type="button" className="btn btn-dark" onClick={handleSubmit}>Convert</button>
          {/* <Button name="Convert" task={handleSubmit}></Button> */}
        </div>
      </>
    );
  }
  // else if(newImageArrived){
  //   return (
  //     <>
  //       <div className="container" style={thumbsContainer}>
  //       {newImages}
  //       </div>
  //       <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",padding:"10px 20px" }}>
  //         <Dropdown />
  //         <button type="button" className="btn btn-dark" onClick={handleSubmit}>Convert</button>
  //         {/* <Button name="Convert" task={handleSubmit}></Button> */}
  //       </div>
  //     </>)

  // } 
  else {
    return (
      <>
        <div className="container">
          <div {...getRootProps({ className: 'dropzone' })} style={DragNdropContainer}>
            <form>
              <input {...getInputProps()} type="file"
                id="inputImage" accept="image/png, image/jpeg" name="image" />
              <ImageNText>
                <img src={dragNdrop} alt="dragndrop" height="120px"
                  width="160px" />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </ImageNText>
            </form>
          </div>
        </div>
        
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",padding:"10px 20px" }}>
        
          <Dropdown />
          <button type="button" className="btn btn-dark" onClick={throwError}>Convert</button>
          {/* <Button name="Convert" task={throwError}></Button> */}
        </div>
      </>

    );
    
  }

  
};

export default ImageContainer;
