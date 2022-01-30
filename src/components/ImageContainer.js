import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import dragNdrop from '../images/drgndrop.png';
import { useDropzone } from 'react-dropzone';

const ImageNText = styled.div`

text-align: center;
justify-content: center;

`;

const ImageContainer = () => {

  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  const DragNdropContainer = {
    border: "1px dashed grey",
    padding: "25vh 0",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#d3d3d3"
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
    maxWidth:"100vw"
  };


  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt="oldImages"
        />
      </div>
    </div>
  ));

  useEffect(() => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);



  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })} style={DragNdropContainer}>
        <input {...getInputProps()} />
        <ImageNText>
          <img src={dragNdrop} alt="dragndrop" height="120px"
            width="160px" />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </ImageNText>
      </div>
      <aside className="container" style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );


};

export default ImageContainer;
