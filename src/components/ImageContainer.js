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
  maxWidth: "100vw"
};

const ImageContainer = () => {
  const [images, setImages] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setImages(acceptedFiles.map(image => Object.assign(image, {
        preview: URL.createObjectURL(image)
      })));
    },

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
        <aside className="container" style={thumbsContainer}>
          {thumbs}
        </aside>
      </div>
      <div style={{ display:"flex",flexDirection:"row",justifyContent:"center",alignItems: "center"}}>
        <Dropdown/>
        <Button name="Convert" task={handleSubmit}></Button>
      </div>

    </>
  );


};

export default ImageContainer;
